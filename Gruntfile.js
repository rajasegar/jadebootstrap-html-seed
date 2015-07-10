module.exports = function(grunt){
	// Project configuration.
	grunt.initConfig({
		pkg:grunt.file.readJSON('package.json'),
		
		bower:{
			install:{
				options:{
					targetDir:'./jade'
				}
			}
		},
		copy:{
			main:{
				files:[
					// copying jade-bootstrap css files to html folder
					{ expand:true,cwd:'bower_components/jade-bootstrap/css/',src:['*.css'],dest:'html/css/',filter:'isFile'}
				]
			}
		},
		
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
	grunt.loadNpmTasks("grunt-bower-task");
	grunt.loadNpmTasks("grunt-contrib-copy");
	grunt.loadNpmTasks("grunt-contrib-watch");
	grunt.loadNpmTasks("grunt-contrib-jade");
	
	
	
	// Default tasks
	grunt.registerTask('default',['jade','watch']);
	grunt.registerTask('install',['bower','copy']);
	
	
	
	grunt.event.on('watch',function(action,filepath,target){
		grunt.log.writeln(target + ': ' + filepath + ' has ' + action);
	});
}