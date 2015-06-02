module.exports = function(grunt){
	// Project configuration.
	grunt.initConfig({
		pkg:grunt.file.readJSON('package.json'),
		
		
		
		jade:{
			compile:{
				options:{
					pretty:true,
					data:{
						debug:false
					}
				},
				files:[{
					expand:true,
					cwd:'jade/',
					src:['*.jade','!_*.jade'],
					dest:'html/',
					ext:'.html'
				}]
			}
		},
		watch:{

			jade:{
				files:['jade/*.jade','jade/**/*.jade'],
				tasks:['jade'],
				options:{
					spawn:false
				}
			}
		}
		
		
		
			
		
	});
	
	// Load the plugin that provides the "jade" task
	grunt.loadNpmTasks("grunt-contrib-watch");
	grunt.loadNpmTasks("grunt-contrib-jade");
	
	
	
	// Default tasks
	grunt.registerTask('default',['jade','watch']);
	
	
	
	grunt.event.on('watch',function(action,filepath,target){
		grunt.log.writeln(target + ': ' + filepath + ' has ' + action);
	});
}