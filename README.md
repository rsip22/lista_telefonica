# App de lista Telefônica com AngularJS

Servir dados dos contatos por API (db.json) usando json-server:

```
$ npm install json-server
$ json-server --watch db.json
```

Em caso de erro "Error: ENOSPC: no space left on device, watch '.'":

```
$ echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
```
