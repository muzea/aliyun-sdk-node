export interface CreateLiveMessageAppRequest {
    /**
     * 应用名，长度2~16个字符。
     * @example `testApp`
     */
    "AppName"?: string;
    /**
     * 安全审核方式，取值：
     * - 0：默认值，不开启安全审核。
     * - 1：内置安全审核。
     * - 2：自定义安全审核。
     * @example `2`
     */
    "AuditType"?: number;
    /**
     * 如果是自定义安全审核（AuditType=2），则需要提供安全审核的地址。安全审核地址以http://或https://开头，不包含私有IP，不允许带端口号。自定义安全审核内容格式见下文。
     * @example `http://demo.aliyundoc.com/exampleaudit`
     */
    "AuditUrl"?: string;
    /**
     * 客户端登录、登出、加入、离开群组等事件回调地址，若为空则不开启事件回调。触发回调接口见[客户端接入](~~2672836~~)。事件回调地址以http://或https://开头，不包含私有IP，不允许带端口号。事件回调格式和回调鉴权逻辑见下文。
     * @example `http://demo.aliyundoc.com/examplecallback`
     */
    "EventCallbackUrl"?: string;
    /**
     * 数据中心，枚举值：
     * - cn-shanghai：默认值，上海。
     * - ap-southeast-1：新加坡。
     * > 调用直播互动其他接口时，需要与当前创建直播互动应用的数据中心一致。
     * @example `cn-shanghai`
     */
    "DataCenter"?: string;
    /**
     * App内群组消息的存储时效档位，取值：
     * - 0：默认值，存储30天。
     * - 1：存储90天。
     * - 2：存储180天。
     * @example `1`
     */
    "MsgLifeCycle"?: number;
}
