
```sh
$ nmap (ip of device or subnet of scan)
```

example:
```sh
$ nmap -p 1-65535 -sS -A -T4 --script=default 10.0.0.23
```


The most important options:

**-sP** : Ping scan (nmap -sP 127.0.0.1)

**-O** : OS Enumeration (nmap -O 127.0.0.1)

**-A** : Detect OS version and service names

**-p** : Scan specific ports (nmap -p 22/ssh/ftp 127.0.0.1)

**-sU** : Scan UDP ports

**-sV** : Service Version Lookup (nmap -sV 127.0.0.1)

**-p-** : Scan all 65536 TCP ports

**--min-rate=1000 -T4** : Scan rapidly

**-sV --script=banner** : Grab banners

**-script** : NSE Script (nmap -script vuln 127.0.0.1)

nmap -T4 -A -v --?
scanme.nmap.org --?


> [List of all options](https://svn.nmap.org/nmap/docs/nmap.usage.txt)
> 
> [Full Manual](https://nmap.org/book/man.html)




Some another Cheat Sheet



Target Specification

|SWITCH|EXAMPLE|DESCRIPTION|
|---|---|---|
||nmap 192.168.1.1|Scan a single IP|
||nmap 192.168.1.1 192.168.2.1|Scan specific IPs|
||nmap 192.168.1.1-254|Scan a range|
||nmap scanme.nmap.org|Scan a domain|
||nmap 192.168.1.0/24|Scan using CIDR notation|
|-iL|nmap -iL targets.txt|Scan targets from a file|
|-iR|nmap -iR 100|Scan 100 random hosts|
|-exclude|nmap -exclude 192.168.1.1|Exclude listed hosts|



