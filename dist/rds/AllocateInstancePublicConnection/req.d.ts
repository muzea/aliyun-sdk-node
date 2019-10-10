interface AllocateInstancePublicConnectionRequest {
    "RegionId"?: string;
    /**
    * 实例ID。
    * @example `rm-uf6wjk5xxxxxxx`
    */ "DBInstanceId": string;
    /**
    * 外网连接地址，前缀可以自定义。
    * >长度5~40，不能包含汉字和非法字符（~!#%^&amp;*=+\|{};:&#x27;&quot;,&lt;&gt;/?），建议由字母、数字、短横线（-）组成。
    * @example `test1.mysql.rds.aliyuncs.com`
    */ "ConnectionStringPrefix": string;
    /**
    * 外网连接端口，取值：**1000-5999**。
    * @example `3306`
    */ "Port": string;
    "OwnerId"?: number;
}
export { AllocateInstancePublicConnectionRequest };