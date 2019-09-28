interface FOAS {
    /**
    * 调用本API，可以减少集群slave台数，仅限独享模式后付费集群
    */ ShrinkCluster(query: {
        /**
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        /**
        * 集群ID
        * @example `cmy99ugusuco66x9qc6knqms`
        */ "clusterId": string;
        /**
        * 机器实例ID，代表你要缩容的机器是哪台，多个逗号分割
        * @example `xxxxxx`
        */ "instanceIds"?: string;
        /**
        * 缩容后保留slave的台数，需要大于等于2
        * @example `2`
        */ "modelTargetCount"?: string;
    }): Promise<{}>;
    /**
    * 修改集群master规格
    */ ModifyMasterSpec(query: {
        /**
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        /**
        * 集群ID
        * @example `cmy99ugusuco66x9qc6knqms`
        */ "clusterId": string;
        /**
        * master机器型号
        * @example `Ecs_4c16g`
        */ "masterTargetModel"?: string;
    }): Promise<{}>;
    /**
    * 获取目前集群上存在的版本型号
    */ GetClusterEngineVersions(query: {
        /**
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        /**
        * 集群ID
        * @example `cmy99ugusuco66x9qc6knqms`
        */ "clusterId": string;
    }): Promise<{}>;
    /**
    * 删除已经创建的queue
    */ DeleteQueue(query: {
        /**
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        /**
        * 集群ID
        * @example `cmy99ugusuco66x9qc6knqms`
        */ "clusterId": string;
        /**
        * queue名称
        * @example `root.default`
        */ "queueName"?: string;
    }): Promise<{}>;
    /**
    * 创建project
    */ CreateProject(query: {
        /**
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        /**
        * 仅共享模式用户需要填写，需要填写共享模式实例ID
        * @example `stream-xxxxxx`
        */ "orderId"?: string;
        /**
        * 集群类型：独享集群 cell；共享集群 public
        * @example `public`
        */ "deployType"?: string;
        /**
        * 集群ID
        * @example `cmy99ugusuco66x9qc6knqms`
        */ "clusterId"?: string;
        /**
        * 主账号id
        * @example `xxxxx`
        */ "managerIds"?: string;
        /**
        * 项目描述
        * @example `xxxxxx`
        */ "description"?: string;
        /**
        * 项目名称
        * @example `xxxxxx`
        */ "name"?: string;
    }): Promise<{}>;
    /**
    * 作业语法检查
    */ ValidateJob(query: {
        /**
        * 集团内用户使用： cn-hangzhou-pre 公共云预发； cn-hangzhou-internal 集团内生产； cn-hangzhou-internal-pre 集团内预发；
        * @example `cn-hangzhou-pre`
        */ "RegionId"?: string;
        /**
        * 作业名称
        * @example `job1`
        */ "jobName": string;
        /**
        * 项目名称
        * @example `project1`
        */ "projectName": string;
    }): Promise<{}>;
    /**
    * 销毁您的独享集群
    */ DestroyCluster(query: {
        /**
        * @example `FD0FF8C0-779A-45EB-9674-FF3E127B10D2`
        */ "RegionId"?: string;
        /**
        * 集群ID
        * @example `cmy99ugusuco66x9qc6knqms`
        */ "clusterId": string;
    }): Promise<{}>;
    /**
    * 对后付费集群进行slave扩容或者master升配
    */ ExpandCluster(query: {
        /**
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        /**
        * 集群ID
        * @example `cmy99ugusuco66x9qc6knqms`
        */ "clusterId": string;
        /**
        * 机器型号,目前不支持混部，只能和已有slave机型一致，支持混部后可以填其他机型
        * 4核机器  Ecs_4c16g;
        * 8核机器  Ecs_8c32g；
        * 16核机器  Ecs_16c64g；
        * 24核机器  Ecs_24c96g；
        * 32核机器  Ecs_32c128g；
        * 56核机器  Ecs_56c224g；
        * 64核机器  Ecs_64c256g；
        * @example `Ecs_4c16g`
        */ "model"?: string;
        /**
        * 扩容到多少台
        * @example `5`
        */ "count"?: number;
        /**
        * 交换机名称，当扩容提示vswitch不足的时候才需要填写，一般不需要填写
        * @example `vsw-xxxxxx`
        */ "userVSwitch"?: string;
    }): Promise<{}>;
    /**
    * 将某个创建但是没有绑定queue的project，绑定到某个尚未绑定过project的queue
    */ BindQueue(query: {
        /**
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        /**
        * 创建项目名称
        * @example `p1`
        */ "projectName": string;
        /**
        * 集群ID名称，不是集群名称
        * @example `集群ID`
        */ "clusterId"?: string;
        /**
        * 要绑定的Queue的名称
        * @example `queue1`
        */ "queueName"?: string;
    }): Promise<{}>;
    /**
    * 创建Queue
    */ CreateQueue(query: {
        /**
        * @example `cn-shanghai`
        */ "RegionId"?: string;
        /**
        * 集群ID
        * @example `cmy99ugusuco66x9qc6knqms`
        */ "clusterId": string;
        /**
        * queue的名称
        * @example `root.default`
        */ "queueName"?: string;
        /**
        * queue拥有的最大cpu
        * @example `4`
        */ "maxVcore"?: number;
        /**
        * queue拥有的最大内存
        * @example `16`
        */ "maxMemMB"?: number;
        /**
        * gpu处理硬件块数
        * @example `1`
        */ "gpu"?: number;
    }): Promise<{}>;
    /**
    * 已经下单购买的用户可以通过本api创建集群，仅限独享集群
    */ CreateCluster(query: {
        /**
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        /**
        * 用户下单生成的实例ID
        * @example `blinkonecs_xxxxxxx`
        */ "orderId"?: string;
        /**
        * 可用区，region-区号
        * @example `cn-shanghai-f`
        */ "zoneId"?: string;
        /**
        * 用户创建的集群需要命名的名称
        * @example `cluster_name`
        */ "displayName"?: string;
        /**
        * 集群描述
        * @example `xxxxxxx`
        */ "description"?: string;
        /**
        * 用户oss的bucket名称
        * @example `xxxxxx`
        */ "userOssBucket"?: string;
        /**
        * 用户需要集群所在vpc名称，注意实时计算需要联通上下游，所以必须和上下游在同一个vpc内，否则会造成无法联通的问题
        * @example `vpc-xxxxx`
        */ "userVpcId"?: string;
        /**
        * 用户指定的交换机名称
        * @example `vsw-xxxxx`
        */ "userVSwitch"?: string;
    }): Promise<{}>;
    /**
    * 查询已拥有的集群信息
    */ ListCluster(query: {
        /**
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        /**
        * 集群ID
        * @example `cmy99ugusuco66x9qc6knqms`
        */ "clusterId"?: string;
        /**
        * 集群名称
        * @example `xxxxx`
        */ "displayName"?: string;
        /**
        * 集群状态 集群正在创建 STARTING； 集群正常运行 RUNNING； 集群正在扩容（增加slave节点数） EXPANDING； 集群正在变配（提交或者降低master型号） UPGRADING； 集群正在销毁 DESTROYING； 集群已经被销毁 DESTROYED； 正在缩容 REDUCING； 集群维护中 MAINTAINING；
        * @example `RUNNING`
        */ "state"?: string;
        /**
        * 集群所属地区
        * @example `cn-hangzhou`
        */ "region"?: string;
        /**
        * 分页选项，每页的集群数
        * @example `1`
        */ "pageSize"?: number;
        /**
        * 分页选项，第几页
        * @example `2`
        */ "pageIndex"?: number;
    }): Promise<{}>;
    /**
    * 获取集群资源情况
    */ GetClusterResource(query: {
        /**
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        /**
        * 集群ID
        * @example `cmy99ugusuco66x9qc6knqms`
        */ "clusterId": string;
    }): Promise<{}>;
    /**
    * 删除已经存在的某个project
    */ DeleteProject(query: {
        /**
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        /**
        * 项目名称
        * @example `xxxxxx`
        */ "projectName": string;
    }): Promise<{}>;
    /**
    * 查询用户已有的project
    */ ListProject(query: {
        /**
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        /**
        * project名称
        * @example `p1`
        */ "name"?: string;
        /**
        * 集群类型：独享集群 cell；共享集群 public
        * @example `cell`
        */ "deployType"?: string;
        /**
        * 集群ID
        * @example `cmy99ugusuco66x9qc6knqms`
        */ "clusterId"?: string;
        /**
        * 地区
        * @example `cn-hangzhou`
        */ "region"?: string;
        /**
        * 分页属性，每页包含project数量
        * @example `10`
        */ "pageSize"?: number;
        /**
        * 分页属性，第几页
        * @example `1`
        */ "pageIndex"?: number;
    }): Promise<{}>;
    /**
    * 获取集群中创建的Queue的信息
    */ GetClusterQueueInfo(query: {
        /**
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        /**
        * 集群ID
        * @example `cmy99ugusuco66x9qc6knqms`
        */ "clusterId": string;
    }): Promise<{}>;
    /**
    * 获取作业原始执行计划
    */ GetRawPlanJson(query: {
        /**
        * 集团内用户使用： cn-hangzhou-pre 公共云预发； cn-hangzhou-internal 集团内生产； cn-hangzhou-internal-pre 集团内预发；
        * @example `cn-hangzhou-pre`
        */ "RegionId"?: string;
        /**
        * 作业名称
        * @example `job1`
        */ "jobName": string;
        /**
        * 项目名称
        * @example `project1`
        */ "projectName": string;
        /**
        * 是否开启智能调优，开启或根据作业历史metric，生成一份执行计划；不开启则使用默认执行计划
        * @example `true`
        */ "autoconfEnable"?: boolean;
        /**
        * 期望cpu数
        * @example `1`
        */ "expectedCore"?: number;
        /**
        * 期望内存
        * @example `4`
        */ "expectedGB"?: number;
    }): Promise<{}>;
    /**
    * 查询project绑定的队列信息
    */ ListProjectBindQueue(query: {
        /**
        * 集团内用户使用： cn-hangzhou-pre 公共云预发； cn-hangzhou-internal 集团内生产； cn-hangzhou-internal-pre 集团内预发；
        * @example `cn-hangzhou-pre`
        */ "RegionId"?: string;
        /**
        * 项目名称
        * @example `project1`
        */ "projectName": string;
        /**
        * 集群ID
        * @example `d6wxwo5tnrmuamx2ly3m7vkz`
        */ "clusterId"?: string;
        /**
        * 队列名称
        * @example `root.default`
        */ "queueName"?: string;
    }): Promise<{}>;
    /**
    * 更新package信息
    */ UpdatePackage(query: {
        /**
        * 集团内用户使用： cn-hangzhou-pre 公共云预发； cn-hangzhou-internal 集团内生产； cn-hangzhou-internal-pre 集团内预发；
        * @example `cn-hangzhou-pre`
        */ "RegionId"?: string;
        /**
        * package名称
        * @example `package1.jar`
        */ "packageName": string;
        /**
        * 项目名称
        * @example `project1`
        */ "projectName": string;
        /**
        * oss接入点
        * @example `oss-cn-hangzhou-internal.aliyuncs.com`
        */ "ossEndpoint"?: string;
        /**
        * ossBucket
        * @example `blinktest2.oss-cn-hangzhou-internal.aliyuncs.com`
        */ "ossBucket"?: string;
        /**
        * oss所有者
        * @example `xxxx`
        */ "ossOwner"?: string;
        /**
        * oss路径
        * @example `/path1/path2`
        */ "ossPath"?: string;
        /**
        * package别名
        * @example `package2.jar`
        */ "originName"?: string;
        /**
        * package注释描述
        * @example `test`
        */ "description"?: string;
        /**
        * package的md5值
        * @example `md5值`
        */ "md5"?: string;
        /**
        * package的标记
        * @example `xxxx`
        */ "tag"?: string;
    }): Promise<{}>;
    /**
    * 查询project绑定的队列的资源信息
    */ ListProjectBindQueueResource(query: {
        /**
        * 集团内用户使用： cn-hangzhou-pre 公共云预发； cn-hangzhou-internal 集团内生产； cn-hangzhou-internal-pre 集团内预发；
        * @example `cn-hangzhou-pre `
        */ "RegionId"?: string;
        /**
        * 项目名称
        * @example `project1`
        */ "projectName": string;
        /**
        * 集群ID
        * @example `d6wxwo5tnrmuamx2ly3m7vkz`
        */ "clusterId"?: string;
        /**
        * 队列名称
        * @example `root.default`
        */ "queueName"?: string;
    }): Promise<{}>;
    /**
    * 获取项目详情
    */ GetProject(query: {
        /**
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        /**
        * 项目名称
        * @example `xxxxx`
        */ "projectName": string;
    }): Promise<{}>;
    /**
    * 获得package信息
    */ GetPackage(query: {
        /**
        * 集团内用户使用： cn-hangzhou-pre 公共云预发； cn-hangzhou-internal 集团内生产； cn-hangzhou-internal-pre 集团内预发；
        * @example `cn-hangzhou-pre`
        */ "RegionId"?: string;
        /**
        * package名称
        * @example `package1.jar`
        */ "packageName": string;
        /**
        * 项目名称
        * @example `project1`
        */ "projectName": string;
    }): Promise<{}>;
    /**
    * 获取引用特定package的作业
    */ GetRefPackageJob(query: {
        /**
        * 集团内用户使用： cn-hangzhou-pre 公共云预发； cn-hangzhou-internal 集团内生产； cn-hangzhou-internal-pre 集团内预发；
        * @example `cn-hangzhou-pre`
        */ "RegionId"?: string;
        /**
        * package名称
        * @example `package1.jar`
        */ "packageName": string;
        /**
        * 项目名称
        * @example `project1`
        */ "projectName": string;
        "pageSize"?: number;
        "pageIndex"?: number;
    }): Promise<{}>;
    /**
    * 搜索job
    */ ListJob(query: {
        /**
        * 集团内用户使用： cn-hangzhou-pre 公共云预发； cn-hangzhou-internal 集团内生产； cn-hangzhou-internal-pre 集团内预发；
        * @example `cn-hangzhou-pre`
        */ "RegionId"?: string;
        /**
        * 项目名称
        * @example `project1`
        */ "projectName": string;
        /**
        * 分页属性，每页返回job数
        * @example `10`
        */ "pageSize"?: number;
        /**
        * 分页属性，第几页
        * @example `1`
        */ "pageIndex"?: number;
        /**
        * 作业名称
        * @example `job1`
        */ "jobName"?: string;
        /**
        * 作业种类： FLINK_STREAM 流作业 FLINK_BATCH 批作业
        * @example `FLINK_STREAM`
        */ "jobType"?: string;
        /**
        * API类型：DATASTREAM；SQL
        * @example `SQL`
        */ "apiType"?: string;
        /**
        * 引擎版本
        * @example `blink_2.2.4`
        */ "engineVersion"?: string;
        /**
        * 集群ID
        * @example `d6wxwo5tnrmuamx2ly3m7vkz`
        */ "clusterId"?: string;
        /**
        * 队列名称
        * @example `root.default`
        */ "queueName"?: string;
        /**
        * 文件夹ID
        * @example `123`
        */ "folderId"?: number;
        "isShowFullField"?: boolean;
    }): Promise<{}>;
    /**
    * 启动作业
    */ StartJob(query: {
        /**
        * 集团内用户使用： cn-hangzhou-pre 公共云预发； cn-hangzhou-internal 集团内生产； cn-hangzhou-internal-pre 集团内预发；
        * @example `cn-hangzhou-pre`
        */ "RegionId"?: string;
        /**
        * 作业名称
        * @example `job1`
        */ "jobName": string;
        /**
        * 项目名称
        * @example `project1`
        */ "projectName": string;
        /**
        * 作业启动相关参数，使用json格式，参数有如startOffset（启动位点，13位时间戳）
        * @example `{"a":"b"}`
        */ "parameterJson"?: string;
    }): Promise<{}>;
    /**
    * 获取某个project下所有的运行实例
    */ ListInstance(query: {
        /**
        * 集团内用户使用： cn-hangzhou-pre 公共云预发； cn-hangzhou-internal 集团内生产； cn-hangzhou-internal-pre 集团内预发；
        * @example `cn-hangzhou-pre`
        */ "RegionId"?: string;
        /**
        * 作业类型：FLINK_STREAM（流作业）；FLINK_BATCH（批作业）
        * @example `FLINK_STREAM`
        */ "jobType": string;
        /**
        * 项目名称
        * @example `project1`
        */ "projectName": string;
        /**
        * 作业名称
        * @example `job1`
        */ "jobName"?: string;
        /**
        * 启动时间范围上限，和启动时间下限配合使用，搜索启动时间在该范围内的运行实例。使用13位时间戳，单位到毫秒
        * @example `1548397575000`
        */ "startBeginTs"?: number;
        /**
        * 启动时间范围下限，和启动时间上限配合使用，搜索启动时间在该范围内的运行实例。使用13位时间戳，单位到毫秒
        * @example `1548397575000`
        */ "startEndTs"?: number;
        /**
        * 停止时间范围上限，和停止时间下限配合使用，搜索停止时间在该范围内的运行实例。使用13位时间戳，单位到毫秒
        * @example `1548397575000`
        */ "endBeginTs"?: number;
        /**
        * 停止时间范围下限，和停止时间上限配合使用，搜索停止时间在该范围内的运行实例。使用13位时间戳，单位到毫秒
        * @example `1548397575000`
        */ "endEndTs"?: number;
        /**
        * api类型：DATASTREAM，SQL
        * @example `SQL`
        */ "apiType"?: string;
        /**
        * 期望状态：
        * RUNNING  运行中；
        * PAUSED   暂停；
        * TERMINATED  停止；
        * SUCCESS  成功（批作业）；
        * FAILED  失败（流作业）
        * @example `RUNNING`
        */ "expectState"?: string;
        /**
        * 实际运行状态：
        * RUNNING  运行中；
        * PAUSED   暂停；
        * TERMINATED  停止；
        * SUCCESS  成功（批作业）；
        * FAILED  失败（流作业）
        * @example `RUNNING`
        */ "actualState"?: string;
        /**
        * 是否搜索归档实例，默认搜索非归档实例。对于流作业来说，同时只存在一个实例，所以当作业启动或者恢复运行的时候，就生成了新的实例，旧实例会被归档；对于批作业，运行结束两天的实例会被归档
        * @example `true`
        */ "isArchived"?: boolean;
        /**
        * 分页选项，每页的实例数
        * @example `10`
        */ "pageSize"?: number;
        /**
        * 分页选项，第几页
        * @example `1`
        */ "pageIndex"?: number;
    }): Promise<{}>;
    /**
    * 更新作业相关属性
    */ UpdateJob(query: {
        /**
        * 集团内用户使用： cn-hangzhou-pre 公共云预发； cn-hangzhou-internal 集团内生产； cn-hangzhou-internal-pre 集团内预发；
        * @example `cn-hangzhou-pre`
        */ "RegionId"?: string;
        /**
        * 作业名称
        * @example `job1`
        */ "jobName": string;
        /**
        * 作业执行计划
        * @example `{a:b}`
        */ "planJson"?: string;
        /**
        * 作业代码
        * @example `code`
        */ "code"?: string;
        /**
        * 引擎版本
        * @example `blink_2.2.4`
        */ "engineVersion"?: string;
        /**
        * 集群ID
        * @example `d6wxwo5tnrmuamx2ly3m7vkz`
        */ "clusterId"?: string;
        /**
        * 队列名称
        * @example `root.default`
        */ "queueName"?: string;
        /**
        * package名称
        * @example `package1.jar`
        */ "packages"?: string;
        /**
        * 项目名称
        * @example `project1`
        */ "projectName": string;
        /**
        * 作业备注描述
        * @example `test`
        */ "description"?: string;
        /**
        * 文件夹ID
        * @example `123`
        */ "folderId"?: number;
        /**
        * 作业运行配置参数
        * @example `k:v`
        */ "properties"?: string;
    }): Promise<{}>;
    /**
    * 修改实例状态
    */ ModifyInstanceState(query: {
        /**
        * 集团内用户使用： cn-hangzhou-pre 公共云预发； cn-hangzhou-internal 集团内生产； cn-hangzhou-internal-pre 集团内预发；
        * @example `cn-hangzhou-pre`
        */ "RegionId"?: string;
        /**
        * 作业名称
        * @example `job1`
        */ "jobName": string;
        /**
        * InstanceID，流作业只有一个运行实例，此处填-1L，指在线上运行的，批作业可以通过ListInstance接口或者Startjob接口获得
        * @example `-1`
        */ "instanceId": number;
        /**
        * 项目名称
        * @example `project1`
        */ "projectName": string;
        /**
        * 期望状态：
        * RUNNING  运行中；
        * PAUSED   暂停；
        * TERMINATED  停止；
        * SUCCESS  成功（批作业）；
        * FAILED  失败（流作业）
        * @example `RUNNING`
        */ "expectState"?: string;
        /**
        * 作业恢复时使用，确认是否使用最新配置。其他情况使用该参数无效
        * @example `true`
        */ "isFlush"?: boolean;
    }): Promise<{}>;
    /**
    * 搜索package信息
    */ ListPackage(query: {
        /**
        * 集团内用户使用： cn-hangzhou-pre 公共云预发； cn-hangzhou-internal 集团内生产； cn-hangzhou-internal-pre 集团内预发；
        * @example `cn-hangzhou-pre`
        */ "RegionId"?: string;
        /**
        * 项目名称
        * @example `project1`
        */ "projectName": string;
        /**
        * package名称
        * @example `package1`
        */ "packageName"?: string;
        /**
        * package类型：
        * JAR   jar包；
        * DICTIONARY  字典；
        * SCRIPT  脚本；
        * PYTHON  python的py文件或者zip包
        * @example `JAR`
        */ "type"?: string;
        /**
        * 分页属性，每页包含package数量
        * @example `10`
        */ "pageSize"?: number;
        /**
        * 分页属性，第几页
        * @example `1`
        */ "pageIndex"?: number;
        "tag"?: string;
    }): Promise<{}>;
    /**
    * 获取子目录
    */ ListChildFolder(query: {
        /**
        * 集团内用户使用： cn-hangzhou-pre 公共云预发； cn-hangzhou-internal 集团内生产； cn-hangzhou-internal-pre 集团内预发；
        * @example `cn-hangzhou-pre`
        */ "RegionId"?: string;
        /**
        * 主目录路径
        * @example `/path`
        */ "path": string;
        /**
        * 项目名称
        * @example `project`
        */ "projectName": string;
    }): Promise<{}>;
    /**
    * 将project从queue上解绑
    */ UnbindQueue(query: {
        /**
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        /**
        * 集群ID
        * @example `cmy99ugusuco66x9qc6knqms`
        */ "clusterId": string;
        /**
        * queue名称
        * @example `q1`
        */ "queueName": string;
        /**
        * 项目名称
        * @example `p1`
        */ "projectName": string;
    }): Promise<{}>;
    /**
    * 获取运行实例使用的cpu和memory等信息
    */ GetInstanceResource(query: {
        /**
        * 集团内用户使用： cn-hangzhou-pre 公共云预发； cn-hangzhou-internal 集团内生产； cn-hangzhou-internal-pre 集团内预发；
        * @example `cn-hangzhou-pre`
        */ "RegionId"?: string;
        /**
        * 作业名称
        * @example `job1`
        */ "jobName": string;
        /**
        * InstanceID，流作业只有一个运行实例，此处填-1L，指在线上运行的，批作业可以通过ListInstance接口或者Startjob接口获得
        * @example `-1`
        */ "instanceId": number;
        /**
        * 项目名称
        * @example `project1`
        */ "projectName": string;
    }): Promise<{}>;
    /**
    * 获取运行实例的metric信息
    */ GetInstanceMetric(query: {
        /**
        * 集团内用户使用： cn-hangzhou-pre 公共云预发； cn-hangzhou-internal 集团内生产； cn-hangzhou-internal-pre 集团内预发；
        * @example `cn-hangzhou-pre`
        */ "RegionId"?: string;
        /**
        * 作业名称
        * @example `job1`
        */ "jobName": string;
        /**
        * 项目名称
        * @example `project1`
        */ "projectName": string;
        /**
        * 使用特定json来获取metric：
        * start：metric开始时间（使用13位时间戳，精确到毫秒）；
        * limit：[取各条线值类型：max,avg,min]:[取值方式：bottom,above,sample]:[数目]；
        * end：metric结束时间（使用13位 时间戳，精确到毫秒）；
        * downsample：下采样方式 [时间(秒)]-[取值方式：max,avg,min]；
        * metric：blink.[项目名称].[作业名称].[指标名称]。常用指标名称如下：业务延时：delay；
        * granularity：采样时间（每隔多少秒取一个点，需要根据start和end时长来取，点数太多会造成调用超时）；
        * aggregator：聚合方式（按照采样时间将底层的点聚合后输出为一个点，聚合方式有最大值max，最小值min，平均值avg三种）
        * @example `{start: 1547637510000, limit: avg:sample:50, end: 1547638420000, queries: [{  downsample: 20s-avg,  metric: blink.bayes_team.huayuan_test_job.delay,  granularity: 20s, aggregator: max }, { downsample: 20s-avg, metric: blink.bayes_team.huayuan_test_job.fetched_delay, granularity: 20s, aggregator: max }] }`
        */ "metricJson"?: string;
        /**
        * InstanceID，流作业只有一个运行实例，此处填-1L，指在线上运行的，批作业可以通过ListInstance接口或者Startjob接口获得
        * @example `-1`
        */ "instanceId"?: number;
    }): Promise<{}>;
    /**
    * 获取集有集群的集群详细配置信息
    */ GetClusterDetails(query: {
        /**
        * 地区
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        /**
        * 集群ID
        * @example `cmy99ugusuco66x9qc6knqms`
        */ "clusterId": string;
    }): Promise<{}>;
    /**
    * 获取job的具体信息
    */ GetJob(query: {
        /**
        * 集团内用户使用： cn-hangzhou-pre 公共云预发； cn-hangzhou-internal 集团内生产； cn-hangzhou-internal-pre 集团内预发；
        * @example `cn-hangzhou-pre `
        */ "RegionId"?: string;
        /**
        * 作业名称
        * @example `job1`
        */ "jobName": string;
        /**
        * 项目名称
        * @example `project1`
        */ "projectName": string;
    }): Promise<{}>;
    /**
    * 获取运行实例的failover信息
    */ GetInstanceExceptions(query: {
        /**
        * 集团内用户使用： cn-hangzhou-pre 公共云预发； cn-hangzhou-internal 集团内生产； cn-hangzhou-internal-pre 集团内预发；
        * @example `cn-hangzhou-pre`
        */ "RegionId"?: string;
        /**
        * 作业名称
        * @example `job1`
        */ "jobName": string;
        /**
        * InstanceID，流作业只有一个运行实例，此处填-1L，指在线上运行的，批作业可以通过ListInstance接口或者Startjob接口获得
        * @example `-1`
        */ "instanceId": number;
        /**
        * 项目名称
        * @example `project1`
        */ "projectName": string;
    }): Promise<{}>;
    /**
    * 获取作业实例运行时的具体参数
    */ GetInstanceConfig(query: {
        /**
        * 集团内用户使用： cn-hangzhou-pre 公共云预发； cn-hangzhou-internal 集团内生产； cn-hangzhou-internal-pre 集团内预发；
        * @example `cn-hangzhou-pre`
        */ "RegionId"?: string;
        /**
        * 作业名称
        * @example `job1`
        */ "jobName": string;
        /**
        * InstanceID，流作业只有一个运行实例，此处填-1L，指在线上运行的，批作业可以通过ListInstance接口或者Startjob接口获得
        * @example `-1`
        */ "instanceId": number;
        /**
        * 项目名称
        * @example `project1`
        */ "projectName": string;
    }): Promise<{}>;
    /**
    * 获取实例运行的DAG图
    */ GetInstanceDetail(query: {
        /**
        * 集团内用户使用： cn-hangzhou-pre 公共云预发； cn-hangzhou-internal 集团内生产； cn-hangzhou-internal-pre 集团内预发；
        * @example `cn-hangzhou-pre`
        */ "RegionId"?: string;
        /**
        * 作业名称
        * @example `job1`
        */ "jobName": string;
        /**
        * InstanceID，流作业只有一个运行实例，此处填-1L，指在线上运行的，批作业可以通过ListInstance接口或者Startjob接口获得
        * @example `-1`
        */ "instanceId": number;
        /**
        * 项目名称
        * @example `project1`
        */ "projectName": string;
    }): Promise<{}>;
    /**
    * 下线作业
    */ OfflineJob(query: {
        /**
        * 集团内用户使用： cn-hangzhou-pre 公共云预发； cn-hangzhou-internal 集团内生产； cn-hangzhou-internal-pre 集团内预发；
        * @example `cn-hangzhou-pre`
        */ "RegionId"?: string;
        /**
        * 作业名称
        * @example `job1`
        */ "jobName": string;
        /**
        * 项目名称
        * @example `project1`
        */ "projectName": string;
    }): Promise<{}>;
    /**
    * 获取运行实例在yarn上的最终状态
    */ GetInstanceFinalState(query: {
        /**
        * 集团内用户使用： cn-hangzhou-pre 公共云预发； cn-hangzhou-internal 集团内生产； cn-hangzhou-internal-pre 集团内预发；
        * @example `cn-hangzhou-pre `
        */ "RegionId"?: string;
        /**
        * 作业名称
        * @example `job1`
        */ "jobName": string;
        /**
        * InstanceID，流作业只有一个运行实例，此处填-1L，指在线上运行的，批作业可以通过ListInstance接口或者Startjob接口获得
        * @example `-1`
        */ "instanceId": number;
        /**
        * 项目名称
        * @example `project1`
        */ "projectName": string;
    }): Promise<{}>;
    /**
    * 获取用户OSS中某个Package的信息
    */ CreatePackage(query: {
        /**
        * 集团内用户使用： cn-hangzhou-pre 公共云预发； cn-hangzhou-internal 集团内生产； cn-hangzhou-internal-pre 集团内预发；
        * @example `cn-hangzhou-pre`
        */ "RegionId"?: string;
        /**
        * 项目名称
        * @example `project1`
        */ "projectName": string;
        /**
        * package名称
        * @example `package1.jar`
        */ "packageName"?: string;
        /**
        * package 类型：
        * JAR  jar包；
        * DICTIONARY 字典（普通文件）；
        * SCRIPT 脚本；
        * PYTHON python文件或者zip包
        * @example `JAR`
        */ "type"?: string;
        /**
        * OSS接入点
        * @example `oss-cn-hangzhou-internal.aliyuncs.com`
        */ "ossEndpoint"?: string;
        /**
        * OSSBucket
        * @example `blinktest2.oss-cn-hangzhou-internal.aliyuncs.com`
        */ "ossBucket"?: string;
        /**
        * OSS所有者
        * @example `user1`
        */ "ossOwner"?: string;
        /**
        * package在oss中的路径
        * @example `/path1/path2`
        */ "ossPath"?: string;
        /**
        * package别名
        * @example `package2`
        */ "originName"?: string;
        /**
        * package的备注描述
        * @example `test`
        */ "description"?: string;
        /**
        * package的md5值
        * @example `md5值`
        */ "md5"?: string;
        "tag"?: string;
    }): Promise<{}>;
    /**
    * 获取作业运行实例的运行概要
    */ GetInstanceRunSummary(query: {
        /**
        * 集团内用户使用： cn-hangzhou-pre 公共云预发； cn-hangzhou-internal 集团内生产； cn-hangzhou-internal-pre 集团内预发；
        * @example `cn-hangzhou-pre`
        */ "RegionId"?: string;
        /**
        * 作业名称
        * @example `job1`
        */ "jobName": string;
        /**
        * InstanceID，流作业只有一个运行实例，此处填-1L，指在线上运行的，批作业可以通过ListInstance接口或者Startjob接口获得
        * @example `-1`
        */ "instanceId": number;
        /**
        * 项目名称
        * @example `project1`
        */ "projectName": string;
    }): Promise<{}>;
    /**
    * 删除foas上保存的oss package信息
    */ DeletePackage(query: {
        /**
        * 集团内用户使用： cn-hangzhou-pre 公共云预发； cn-hangzhou-internal 集团内生产； cn-hangzhou-internal-pre 集团内预发；
        * @example `cn-hangzhou-pre `
        */ "RegionId"?: string;
        /**
        * package名称
        * @example `package.jar`
        */ "packageName": string;
        /**
        * 项目名称
        * @example `project1`
        */ "projectName": string;
    }): Promise<{}>;
    /**
    * 删除文件夹
    */ DeleteFolder(query: {
        /**
        * 集团内用户使用： cn-hangzhou-pre 公共云预发； cn-hangzhou-internal 集团内生产； cn-hangzhou-internal-pre 集团内预发；
        * @example `cn-hangzhou-pre`
        */ "RegionId"?: string;
        /**
        * 文件夹路径
        * @example `/path1/path2`
        */ "path": string;
        /**
        * 项目名称
        * @example `project1`
        */ "projectName": string;
    }): Promise<{}>;
    /**
    * 获取运行实例的ckeckpoint
    */ GetInstanceCheckpoint(query: {
        /**
        * 集团内用户使用： cn-hangzhou-pre 公共云预发； cn-hangzhou-internal 集团内生产； cn-hangzhou-internal-pre 集团内预发；
        * @example ` cn-hangzhou-pre`
        */ "RegionId"?: string;
        /**
        * 作业名称
        * @example `job1`
        */ "jobName": string;
        /**
        * InstanceID，流作业只有一个运行实例，此处填-1L，指在线上运行的，批作业可以通过ListInstance接口或者Startjob接口获得
        * @example `-1`
        */ "instanceId": number;
        /**
        * 项目名称
        * @example `project1`
        */ "projectName": string;
    }): Promise<{}>;
    /**
    * 获得运行实例的相关信息
    */ GetInstance(query: {
        /**
        * 集团内用户使用： cn-hangzhou-pre 公共云预发； cn-hangzhou-internal 集团内生产； cn-hangzhou-internal-pre 集团内预发；
        * @example `cn-hangzhou-pre`
        */ "RegionId"?: string;
        /**
        * 作业名称
        * @example `job1`
        */ "jobName": string;
        /**
        * InstanceID，可以通过ListInstance接口或者Startjob接口获得
        * @example `123`
        */ "instanceId": number;
        /**
        * 项目名称
        * @example `project1`
        */ "projectName": string;
    }): Promise<{}>;
    /**
    * 获取文件夹信息
    */ GetFolder(query: {
        /**
        * 集团内用户使用： cn-hangzhou-pre 公共云预发； cn-hangzhou-internal 集团内生产； cn-hangzhou-internal-pre 集团内预发；
        * @example `cn-hangzhou-pre `
        */ "RegionId"?: string;
        /**
        * reg
        * @example `/path1/path2`
        */ "path": string;
        /**
        * reg
        * @example `project1`
        */ "projectName": string;
    }): Promise<{}>;
    /**
    * 移动文件夹
    */ MVFolder(query: {
        /**
        * @example `region`
        */ "RegionId"?: string;
        /**
        * 项目名称
        * @example `p`
        */ "projectName": string;
        /**
        * 原路径
        * @example `/dets`
        */ "srcPath"?: string;
        /**
        * 目标路径
        * @example `/folder1`
        */ "destPath"?: string;
    }): Promise<{}>;
    /**
    * 使用API提交作业
    */ CommitJob(query: {
        /**
        * 集团内用户使用： cn-hangzhou-pre 公共云预发； cn-hangzhou-internal 集团内生产； cn-hangzhou-internal-pre 集团内预发；
        * @example `cn-hangzhou-pre`
        */ "RegionId"?: string;
        /**
        * 作业名称
        * @example `job1`
        */ "jobName": string;
        /**
        * 项目名称
        * @example `project1`
        */ "projectName": string;
        "isOnOff"?: boolean;
        "maxCU"?: number;
        "configure"?: string;
    }): Promise<{}>;
    /**
    * 在确定项目路径下创建文件夹
    */ CreateFolder(query: {
        /**
        * 集团内用户使用： cn-hangzhou-pre 公共云预发； cn-hangzhou-internal 集团内生产； cn-hangzhou-internal-pre 集团内预发；
        * @example `cn-hangzhou-pre`
        */ "RegionId"?: string;
        /**
        * @example `projecct1`
        */ "projectName": string;
        /**
        * @example `/新手任务`
        */ "path"?: string;
    }): Promise<{}>;
    /**
    * 删除作业
    */ DeleteJob(query: {
        /**
        * 集团内用户使用： cn-hangzhou-pre 公共云预发； cn-hangzhou-internal 集团内生产； cn-hangzhou-internal-pre 集团内预发；
        * @example `cn-hangzhou-pre`
        */ "RegionId"?: string;
        /**
        * 作业名称
        * @example `job1`
        */ "jobName": string;
        /**
        * 项目名称
        * @example `project1`
        */ "projectName": string;
    }): Promise<{}>;
    /**
    * 根据作业类型和名称获BatchGetInstanceRunSummary（批量获取实例运行信息）接口用来批量获取某个项目下，某一类作业（批作业或者流作业）的多个Job的运行实例情况。
    */ BatchGetInstanceRunSummary(query: {
        /**
        * 集团内用户使用：
        * - 公共云预发：cn-hangzhou-pre
        * - 集团内生产：cn-hangzhou-internal
        * - 集团内预发：cn-hangzhou-internal-pre
        * @example `cn-hangzhou-pre`
        */ "RegionId"?: string;
        /**
        * 作业名称，逗号（,）分隔。
        * @example `job1,job2`
        */ "jobNames": string;
        /**
        * 作业类型，批作业使用FLINK_BATCH；流作业使用FLINK_STREAM。
        * @example `FLINK_STREAM`
        */ "jobType": string;
        /**
        * 项目名称。
        * @example `test_project`
        */ "projectName": string;
    }): Promise<{}>;
    /**
    * 根据项目名称和作业名称检测是否已经获取到planjson
    */ CheckRawPlanJson(query: {
        /**
        * 集团内用户使用： cn-hangzhou-pre 公共云预发； cn-hangzhou-internal 集团内生产； cn-hangzhou-internal-pre 集团内预发；
        * @example `cn-hangzhou-pre`
        */ "RegionId"?: string;
        /**
        * 单个作业名称
        * @example `job1`
        */ "jobName": string;
        /**
        * 当使用CheckRawPlanJson发送请求后，会返回一个sessionId，将该sessionId填在此处
        * @example `j6b43mm10nnzywsixmeh8maflgt6xq5afyeuflow3fravqlby0udi605mi7sty2pem2w9nysqiztag5je4esvmgq04pdcazgdthy3u5riy6na0fz6fmgph1k6b62bvjs7kqorn69ujsk0`
        */ "sessionId": string;
        /**
        * 项目名称
        * @example `project1`
        */ "projectName": string;
    }): Promise<{}>;
    /**
    * 创建作业
    */ CreateJob(query: {
        /**
        * 集团内用户使用： cn-hangzhou-pre 公共云预发； cn-hangzhou-internal 集团内生产； cn-hangzhou-internal-pre 集团内预发；
        * @example `cn-hangzhou-pre `
        */ "RegionId"?: string;
        /**
        * 作业名称
        * @example `job1`
        */ "jobName"?: string;
        /**
        * 作业类型：
        * FLINK_STREAM 流作业；
        * FLINK_BATCH 批作业；
        * @example `FLINK_STREAM`
        */ "jobType"?: string;
        /**
        * 创建作业的类型：
        * DATASTREAM，SQL
        * @example `SQL`
        */ "apiType"?: string;
        /**
        * SQL作业填写SQL代码，DataStream作业填写Foas上提交DataStream作业的相关参数
        * @example `code1`
        */ "code"?: string;
        /**
        * 执行计划
        * @example `{a:b}`
        */ "planJson"?: string;
        /**
        * 项目名称
        * @example `project1`
        */ "projectName": string;
        /**
        * 使用blink的版本
        * @example `blink_2.2.4`
        */ "engineVersion"?: string;
        /**
        * 集群ID
        * @example `d6wxwo5tnrmuamx2ly3m7vkz`
        */ "clusterId"?: string;
        /**
        * 队列名称
        * @example `root.default`
        */ "queueName"?: string;
        /**
        * SQL作业运行的相关参数
        * @example `{k:v}`
        */ "properties"?: string;
        /**
        * jar包全名称，多个使用逗号分隔
        * @example `package1,package2`
        */ "packages"?: string;
        /**
        * 对作业相关描述备注
        * @example `test`
        */ "description"?: string;
        /**
        * 文件夹ID
        * @example `123`
        */ "folderId"?: number;
    }): Promise<{}>;
    CreateCellClusterOrder(query: {
        "RegionId"?: string;
        "payModel"?: string;
        "region"?: string;
        "masterSpec"?: string;
        "masterNum"?: number;
        "slaveSpec"?: string;
        "slaveNum"?: number;
        "period"?: number;
    }): Promise<{}>;
    GetClusterMetrics(query: {
        "RegionId"?: string;
        "clusterId": string;
        "metricJson"?: string;
    }): Promise<{}>;
    CalcPlanJsonResource(query: {
        "RegionId"?: string;
        "projectName"?: string;
        "jobName"?: string;
    }): Promise<{}>;
    GetJobLatestAutoScalePlan(query: {
        "RegionId"?: string;
        "jobName": string;
        "projectName": string;
    }): Promise<{}>;
    UpdateAutoScaleConfig(query: {
        "RegionId"?: string;
        "projectName"?: string;
        "jobName"?: string;
        "instanceId"?: number;
        "configJson"?: string;
    }): Promise<{}>;
    GetInstanceHistoryAutoScalePlanContent(query: {
        "RegionId"?: string;
        "jobName": string;
        "instanceId": number;
        "planName": string;
        "projectName": string;
    }): Promise<{}>;
    GetInstanceHistoryAutoScalePlanList(query: {
        "RegionId"?: string;
        "jobName": string;
        "instanceId": number;
        "projectName": string;
    }): Promise<{}>;
    GetInstanceVertexTaskManagers(query: {
        "RegionId"?: string;
        "jobName": string;
        "instanceId": number;
        "vertexId": string;
        "projectName": string;
    }): Promise<{}>;
}
export default FOAS;
