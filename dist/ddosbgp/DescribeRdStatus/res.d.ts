export interface DescribeRdStatusResponse {
    /**
     * 本次调用请求的 ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `1B0F7EC6-51D7-4D70-B0EC-CD8A9E998D86`
     */
    RequestId: string;
    /**
     * 原生防护多账号管理的管理账号 ID。
     * @example `125085778340****`
     */
    RootUid: string;
    /**
     * 当前账号 ID。
     * @example `125085778340****`
     */
    CurrentUid: string;
    /**
     * 是否在[资源管理控制台](https://resourcemanager.console.aliyun.com)开通了资源目录。
     * @example `false`
     */
    RemoteEnable: boolean;
    /**
     * 当前账号是否开通了原生防护多账号管理。
     * @example `false`
     */
    LocalEnable: boolean;
    /**
     * 资源目录的管理账号 (Master Account) ID。
     * @example `125085778340****`
     */
    MasterUid: string;
    /**
     * 是否开启了可信服务。
     * @example `false`
     */
    ServicePrincipalEnabled: boolean;
    /**
     * 是否允许使用原生防护多账号管理。
     * @example `false`
     */
    Enabled: boolean;
    /**
     * 账号类型。取值：
     * - **MasterAccount**：表示管理账号
     * - **DelegatedAdminAccount**：表示委托管理账号
     * - **MemberAccount**：表示成员账号
     * @example `MemberAccount`
     */
    CurrentUidType: string;
}
