export interface GetProxyResponse {
    /**
     * 请求ID。
     * @example `F49D4598-2B3C-5723-865E-2CCB818E****`
     */
    RequestId: string;
    /**
     * 请求是否成功，返回值如下：
     * - **true**：请求成功
     * - **false**：请求失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误信息。
     * @example `The condition cannot be empty!`
     */
    ErrorMessage: string;
    /**
     * 错误码。
     * @example `UnknownError`
     */
    ErrorCode: string;
    /**
     * 安全访问代理ID。
     * @example `4**`
     */
    ProxyId: number;
    /**
     * 安全访问代理创建人的用户ID。
     * @example `12****`
     */
    CreatorId: number;
    /**
     * 安全访问代理创建人的用户昵称。
     * @example `test_name`
     */
    CreatorName: string;
    /**
     * 实例ID。
     * @example `183****`
     */
    InstanceId: number;
    /**
     * 是否开启内网地址，默认返回值为**true**。
     * @example `true`
     */
    PrivateEnable: boolean;
    /**
     * 内网地址。
     * @example `dphzmy-5j8oimjsz6ze****.proxy.dms.aliyuncs.com`
     */
    PrivateHost: string;
    /**
     * 是否开启公网地址，返回值如下：
     * - **true**：启用
     * - **false**：禁用
     * @example `true`
     */
    PublicEnable: boolean;
    /**
     * 公网地址，公网地址始终都会返回。
     * > - 当公网地址的开启状态为**true**时，此处返回的公网地址为有DNS解析能力的有效地址。
     * > - 当公网地址的开启状态为**false**时，此处返回的公网地址为无DNS解析能力的无效地址。
     * @example `dphzmy-5j8oimjsz6zed7k****.proxy.dms.aliyuncs.com`
     */
    PublicHost: string;
    /**
     * HTTPS协议端口号。
     * @example `443`
     */
    HttpsPort: number;
    /**
     * 数据库协议类型，例如：MYSQL
     * @example `MYSQL`
     */
    ProtocolType: string;
    /**
     * 数据库协议连接端口号
     * @example `3306`
     */
    ProtocolPort: number;
    /**
     * 实例地区
     * @example `cn-hangzhou`
     */
    RegionId: string;
}
