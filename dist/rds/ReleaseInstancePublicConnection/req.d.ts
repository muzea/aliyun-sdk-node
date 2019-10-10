interface ReleaseInstancePublicConnectionRequest {
    "RegionId"?: string;
    /**
    * 实例ID。
    * @example `rm-uf6wjk5xxxxxxx`
    */ "DBInstanceId": string;
    /**
    * 外网连接地址。
    * @example `rm-uf6wjk5xxxx.mysql.rds.aliyuncs.com`
    */ "CurrentConnectionString": string;
    "OwnerId"?: number;
}
export { ReleaseInstancePublicConnectionRequest };