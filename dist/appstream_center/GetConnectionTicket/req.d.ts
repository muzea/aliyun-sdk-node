export interface GetConnectionTicketRequest {
    /**
     * 产品类型。
     * @example `CloudApp`
     */
    "ProductType": string;
    /**
     * 便捷账号ID。
     * @example `alice`
     */
    "EndUserId": string;
    /**
     * 地域ID。
     * > 当传入本参数时，仅会在参数指定地域的交付组中分配应用实例。
     * @example `cn-hangzhou`
     */
    "BizRegionId"?: string;
    /**
     * 任务ID。
     * > 非首次调用时必填。使用本参数查询任务状态和连接凭证。
     * @example `28778acb-a469-4bc0-8e0f****`
     */
    "TaskId"?: string;
    /**
     * 应用ID。
     * > 首次调用时必填，后续调用时选填。
     * @example `ca-e4s0puhmwi7v****`
     */
    "AppId"?: string;
    /**
     * 应用版本。传入本参数时，仅会打开参数所指定版本的应用。如果不传入本参数，则会打开已授权的任意版本的应用。
     * @example `1.0.0`
     */
    "AppVersion"?: string;
    /**
     * 应用启动参数。关于启动参数的获取方法，请参见[如何获取应用安装参数与启动参数](https://help.aliyun.com/zh/wuying-appstreaming/user-guide/create-an-application?#how-to-get-installation-and-startup-para)。
     * @example `/q /n`
     */
    "AppStartParam"?: string;
    /**
     * 交付组列表。
     * > - 当传入本参数时，仅会在参数指定的且已授权的交付组中分配应用实例。
     * > - 当传入`AppInstanceId`或`AppInstancePersistentId `参数时，本参数必填。
     */
    "AppInstanceGroupIdList"?: string[];
    /**
     * 持久会话ID。
     * @example `p-0bxls9m3cl7s****`
     */
    "AppInstancePersistentId"?: string;
    /**
     * 应用实例ID。
     * >
     * > - 当传入本参数时，仅会尝试分配参数所指定的应用实例。
     * > - 当传入本参数时，必须同时传入`AppInstanceGroupIdList`参数，且`AppInstanceGroupIdList`中交付组ID的数量为1。
     * @example `ai-1rznfnrvsa99d****`
     */
    "AppInstanceId"?: string;
}
