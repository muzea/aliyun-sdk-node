interface AllocateReadWriteSplittingConnectionRequest {
    "RegionId"?: string;
    /**
    * 主实例ID。
    * @example `rm-uf6wjk5xxxxxxx`
    */ "DBInstanceId": string;
    "OwnerId"?: number;
    /**
    * 读写分离地址前缀名，不可重复，由小写字母和中划线组成，需以字母开头，长度不超过30个字符。
    * >默认以“实例名+rw”字符串组成前缀。
    * @example `rr-m5exxxxx-rw.mysql.rds.aliyuncs.com`
    */ "ConnectionStringPrefix"?: string;
    /**
    * 读写分离端口，取值：
    * * MySQL：范围为3001~3999，默认为3306；
    * * SQL Server：范围为1000~5999，默认为1433。
    * @example `3306`
    */ "Port"?: string;
    /**
    * 延迟阈值，范围是0~7200，单位：秒，默认为30。
    * >当只读实例延迟超过该阈值时，读取流量不发往该实例。
    * @example `30`
    */ "MaxDelayTime"?: string;
    /**
    * 读写分离连接串的网络类型，取值：
    * * **Internet**：外网；
    * * **Intranet**：内网。
    * 默认为内网，且内网类型与主实例保持一致。
    * @example `Intranet`
    */ "NetType"?: string;
    /**
    * 读权重分配模式，取值：
    * * **Standard**：按规格权重自动分配；
    * * **Custom**：自定义分配权重。
    * @example `Standard`
    */ "DistributionType"?: string;
    /**
    * 读权重分配，即传入主实例和只读实例的读请求比例。以100进行递增，最大值为10000，格式：{“Instanceid1“:”Weight”,”Instanceid2”:”Weight”...}。
    * >* 当DistributionType为Custom时，必须传入该参数；
    * * 当DisrtibutionType为Standard时，传入该参数无效。
    * @example `{“Instanceid1“:”100”,”Instanceid2”:”200”}`
    */ "Weight"?: string;
}
export { AllocateReadWriteSplittingConnectionRequest };