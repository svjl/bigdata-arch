# Hadoop windows installation
Choose Hadoop 3.2.2

## Folders

* C:\bigdata\RedHat\java-1.8.0-openjdk-1.8.0.282-1
   * ensure Java installed to a folder without any space 
   * set JAVA_HOME on it
* C:\bigdata\hadoop-3.2.2
   * set HADOOP_HOME on it
* C:\bigdata\data\namenode
* C:\bigdata\data\datanode

## Guide for pseudo-distributed mode
* C:\bigdata\hadoop-3.2.2\etc\hadoop\core-site.xml
<configuration>
    <property>
        <name>fs.defaultFS</name>
        <value>hdfs://localhost:9000</value>
    </property>
</configuration>

* C:\bigdata\hadoop-3.2.2\etc\hadoop\hdfs-site.xml

