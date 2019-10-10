interface SwitchDBInstanceNetTypeRequest {
    "RegionId"?: string;
    /**
    * 实例ID。
    * @example `rm-uf6wjk5xxxxxxx`
    */ "DBInstanceId": string;
    /**
    * 自定义连接地址的前辍。由字母，数字组成，小写字母开头，8~64个字符。
    * @example `rm-xxxxxx`
    */ "ConnectionStringPrefix": string;
    "OwnerId"?: number;
    /**
    * 用于保证请求的幂等性，防止重复提交请求。由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符，且该参数值中不能包含非ASCII字符。
    * @example `ETnLKlblzczshOTUbOCzxxxxxx`
    */ "ClientToken"?: string;
    /**
    * 端口号，取值：**3001~3999**。
    * @example `3306`
    */ "Port"?: string;
    /**
    * 查询连接地址类型，取值：
    * * **Normal**：查询普通连接；
    * * **ReadWriteSplitting**：查询读写分离连接；
    * 默认返回所有连接。
    * @example `Normal`
    */ "ConnectionStringType"?: string;
}
export { SwitchDBInstanceNetTypeRequest };