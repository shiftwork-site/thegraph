# Setup The Graph for rental contract

Verify before initialization!
Remove existing folder before creating!

```shell
sudo rm shift-rentals/ -r
```

```shell
sudo rm shift-rentals/ -r
sudo graph init --studio shift-rentals
sudo graph codegen
sudo graph build
sudo graph deploy --studio shift-rentals
```