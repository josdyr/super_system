# in powershell (Administration mode)
lsb_release -a # get current distro information

wsl --set-version Ubuntu 2 # set the wsl to version 2
wsl --set-default-version 2 # set the wsl default to version 2

sudo apt update && sudo apt dist-upgrade # update and upgrade distro

# Docker (https://medium.com/@XanderGrzy/docker-in-windows-wsl-2-bc62b5236d1c)
sudo apt-get remove docker docker-engine docker.io containerd runc
sudo apt-get update
sudo apt-get install docker-ce apt-transport-https ca-certificates curl gnupg-agent software-properties-common
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
sudo gpasswd -a $USER docker
# Lastly, since WSL 2 doesn’t use systemd, Docker won’t be able to start on it’s own. To start it, run:
sudo service docker start

# Node
curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
sudo apt install -y nodejs
node -v # v14.2.0
npm -v # 6.14.4

# Angular
sudo npm install -g @angular/cli
ng --version

ng new my-new-testing-app # make a new angular app
