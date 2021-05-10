# Hadoop windows installation
Choose Hadoop 3.2.2

## Prepare folders and install JDK & Hadoop

* C:\bigdata\RedHat\java-1.8.0-openjdk-1.8.0.282-1
   * ensure Java installed to a folder without any space 
   * set JAVA_HOME on it

* C:\bigdata\hadoop-3.2.2
   * set HADOOP_HOME on it

* Add %JAVA_HOME%\bin and %HADOOP_HOME% to PATH

* C:\bigdata\data\namenode

* C:\bigdata\data\datanode

## Configration Guide for pseudo-distributed mode
* C:\bigdata\hadoop-3.2.2\etc\hadoop\core-site.xml
<configuration>
    <property>
        <name>fs.defaultFS</name>
        <value>hdfs://localhost:9000</value>
    </property>
</configuration>

* C:\bigdata\hadoop-3.2.2\etc\hadoop\hdfs-site.xml
<configuration>
    <property>
        <name>dfs.replication</name>
        <value>1</value>
    </property>
    <property>
        <name>dfs.namenode.name.dir</name>
        <value>file:///C:/bigdata/data/namenode</value>
    </property>
    <property>
        <name>dfs.datanode.data.dir</name>
        <value>file:///C:/bigdata/data/datanode</value>
    </property>
</configuration>

* C:\bigdata\hadoop-3.2.2\etc\hadoop\mapred-site.xml
<configuration>
    <property>
        <name>mapreduce.framework.name</name>
        <value>yarn</value>
    </property>
</configuration>

* C:\bigdata\hadoop-3.2.2\etc\hadoop\yarn-site.xml
<configuration>
    <property>
        <name>yarn.resourcemanager.hostname</name>
        <value>localhost</value>
    </property>
    <property>
        <name>yarn.nodemanager.aux-services</name>
        <value>mapreduce_shuffle</value>
    </property>
</configuration>

## Format namenode
bin\hdfs namenode -format

## Start services
sbin\start-dfs.cmd
    NameNode, DateNode
    http://localhost:9870/

sbin\start-yarn.cmd
    ResourceManager, NodeManager
    http://localhost:8088/

bin\mapred.cmd historyserver
    MapReduce JobHistory Server
    http://localhost:19888/

