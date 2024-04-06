# Setup The Graph for rental contract

Verify before initialization!
Remove existing folder before creating!

```shell
sudo rm shift-rentals/ -r
```

```shell
sudo graph init --studio shift-rentals
cd shift-rentals
sudo graph codegen
sudo npm i --legacy-peer-deps
sudo graph build
sudo graph deploy --studio shift-rentals
```