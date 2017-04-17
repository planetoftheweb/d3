# Introduction

The code for this course is freely available in GitHub for all users at this URL(https://github.com/planetoftheweb/d3). In GitHub, you'll see that the project is organized into branches. Each branch corresponds to a video in the course. They are named according to the video they correspond to. If you see a branch that starts with a name like VALID_BRANCH_NAME, that means that the branch corresponds to the VALID_CHAPTER and refers to the VALID_VIDEO_NUMBER video in that chapter. Also, if you see a B at the end of the name, those are how the files looked like at the beginning of the video. And if you see an E at the end of the name, that's how the files looked like at the end of the video.

The best way to work with the project is to clone all the branches at once. In order to do that, you'll need Node.js as well as Git installed. You can find Node.js and download the installer at this [URL](https://nodejs.org/en/), and you can find Git and download the installer for your platform at this [URL](https://git-scm.com/). When you install Git, make sure you add the Git Bash terminal in Windows. It makes running the commands more consistent.

So, let me show you how to clone all the branches for this project. First, I'm going to go to the GitHub repo, and I'm going to click on this button to copy the link to the repo.

Once I do that, I'm going to switch over to a Terminal, make sure that I'm in the Desktop. So I'll do a cd ~/Desktop. On a PC, I'll be running something like Git Bash or something that is compatible with Unix terminal commands. Once I do that, I can create a directory, I'll do mkdir, and then call this FOLDER_NAME, and change directory to FOLDER_NAME, and now I can issue my git clone command. It's going to be a little different, I'll do a git clone command with a --bare option.

That's going to download pretty much just the contents of the .git folder. So I'm going to paste the URL from Git, and them I'm going to add an extra .git at the end. So this will download the bare repository, now we need to convert that to a regular repository. So, I'm going to use the git config and change a variable called core.bare, which is a boolean variable, to false. That means that it will no longer be a bare repository.

Now if I issue a git reset --hard command, it's going to reset the head pointer, and this is going to give us all of the different branches. Let's go ahead and clear this out, and issue a git branch command. You can see that I have not just the master branch, but every other branch in the project.

The next thing we need to do is install the project dependencies we'll need for this project to run properly. In order to do that, I need to issue a NPM INSTALL command. Once the installation is done, I'm ready to switch to any of the branches.

You should start the videos with the project opened in your favorite text editor.

This project uses Gulpjs to create a run a server, which is required for AngularJS projects, as well as other automation to process files. I've already created all of the automation you'll need. Just run the gulp command. Right now we're seeing the master branch, which shows the project at the end of the course.

If I'm watching a video at the beginning of CHAPTER_NAME, and it's the VIDEO_NUMBER movie, and I want to get the files at the beginning of that video, then I'm going to issue a git checkout, and then VALID_CHECKOUT_COMMAND, and now I'll be able to open these files in my editor at the beginning of the third chapter and the third video.

If you've made some modifications to files when you do a git checkout command, you can issue a git stash command before, so that it clears out any of the changes you have made. Now let's go ahead and checkout the master branch again.

I'll start each video in the course with the GULP command already running in the background, and the code running inside our editor as well as a copy of the browser.

Now that we're ready to get going
