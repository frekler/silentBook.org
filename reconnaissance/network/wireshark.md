|Usage|Filter syntax|
|---|----|
|Filter by IP|ip.addr == 10.10.50.1|
|Filter by Destination IP|ip.dest == 10.10.50.1|
|Filter by Source IP|ip.src == 10.10.50.1|
|Filter by IP range|ip.addr >= 10.10.50.1 and ip.addr <= 10.10.50.100|
|Filter by Multiple IPs|ip.addr == 10.10.50.1 and ip.addr == 10.10.50.100|
|Filter out IP address|!(ip.addr == 10.10.50.1)|
|Filter subnet|ip.addr == 10.10.50.1/24|
|Filter by port|tcp.port == 25|
|Filter by destination port|tcp.dstport == 23|
|Filter by IP address and port|ip.addr == 10.10.50.1 and tcp.port == 25|
|Filter by protocol|dns/http/ftp/ssh/arp/telnet/icmp|
|Filter by URL|http.host == 'host name'|
|Filter by time stamp|frame.time >= 'Oct 08, 2023 22:56:00'|
|Filter SYN flag|tcp.flags.syn == 1  
tcp.flags.ack == 0 and tcp.flags.ack == 0|
|Beacon Filter|wlan.fc.type_subtype = 0x08|
|Broadcast filter|eth.dst == ff:ff:ff:ff:ff:ff|
|Multicast filter|(eth.dst[0] & 1)|
|Host name filter|ip.host = hostname|
|MAC address filter|eth.addr == 00:70:f4:23:18:c4|
|RST flag filter|tcp.flags.reset == 1|