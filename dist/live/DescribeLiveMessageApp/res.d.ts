export interface DescribeLiveMessageAppResponse {
    /**
     * 请求ID。
     * @example `9FB68B5B-ED07-18F0-A3CF-083F4E74****`
     */
    RequestId: string;
    /**
     * 所查询的互动消息应用ID。
     * @example `demo`
     */
    AppId: string;
    /**
     * App名称。
     * @example `testApp`
     */
    AppName: string;
    /**
     * 互动消息应用的AppKey，在进行与该互动消息应用ID相关的各种鉴权操作时需要该信息。
     * @example `**********************************`
     */
    AppKey: string;
    /**
     * 互动消息应用签名，互动消息服务SDK需要该信息。
     * @example `**************************************************************************`
     */
    AppSign: string;
    /**
     * 安全审核方式。取值：
     * - 0：不开启安全审核。
     * - 1：内置安全审核。
     * - 2：自定义安全审核。
     * @example `2`
     */
    AuditType: number;
    /**
     * AuditType取值为2时提供的安全审核地址。
     * @example `http://example.aliyundoc.com/exampleaudit`
     */
    AuditUrl: string;
    /**
     * 用户登录、登出、加入、离开群组等事件的回调地址，若为空则不开启事件回调。
     * @example `http://example.aliyundoc.com/examplecallback`
     */
    EventCallbackUrl: string;
    /**
     * 是否禁用互动消息应用。
     * @example `false`
     */
    Disable: boolean;
    /**
     * 创建时间，用UNIX时间戳表示，单位：秒。
     * @example `1698305471`
     */
    CreateTime: number;
    /**
     * 修改时间，用UNIX时间戳表示，单位：秒。
     * @example `1698305471`
     */
    ModifyTime: number;
    /**
     * 数据中心。
     * @example `cn-shanghai`
     */
    DataCenter: string;
}
