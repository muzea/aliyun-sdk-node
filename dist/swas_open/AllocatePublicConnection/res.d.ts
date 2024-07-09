export interface AllocatePublicConnectionResponse {
    /**
     * 请求ID。
     * @example `30637AD6-D977-4833-A54C-CC89483E****`
     */
    RequestId: string;
    /**
     * 外网访问地址。
     * @example `db-38263fa955774501a2ae1bdaed6f****.mysql.rds.aliyuncs.com`
     */
    PublicConnection: string;
}
