# iBeacon Reciever for Mac OS X

Mac OSX 10.9以上、Node.js 0.10 以上

依存モジュールのインストール

```
$ npm install
```

config.jsonにidを設定。必要であれば検索対象のUUIDを指定（指定しない場合は全てのUUIDが対象）

```
{
  "id": "hokamura",
  "uuid": ""
}
```

起動したら近くにあるiBeaconの電波を受信してサーバーに送信する

```
$ node app.js
```

`sample.html`をブラウザで開く（`file://`でOK）とサーバー経由でデータを受信できる。

```
$ open sample.html
```
