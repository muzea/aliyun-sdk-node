export interface GetPluginsResponse {
    /**
     * 请求ID。
     * @example `03A3E2F4-6804-5663-9D5D-2EC47A1*****
    `
     */
    RequestId: string;
    /**
     * 是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * Code。
     * @example `200`
     */
    Code: number;
    /**
     * 错误码。
     * @example `500`
     */
    ErrorCode: string;
    /**
     * HTTP STATUS编码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 接口信息。
     * @example `success`
     */
    Message: string;
    /**
     * 动态错误信息中的占位符。
     * @example `code`
     */
    DynamicCode: string;
    /**
     * 动态错误信息。
     * @example `message`
     */
    DynamicMessage: string;
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 插件ID。
         * @example `1`
         */
        Id: number;
        /**
         * 创建人ID。
         * @example `123`
         */
        PrimaryUser: string;
        /**
         * 插件类型：
         * 自定义：0
         * 认证权限：1
         * 安全防护：2
         * 传输协议：3
         * 流量管控：4
         * 流量观测：5
         * @example `0`
         */
        Category: number;
        /**
         * 插件名称。
         * @example `key-auth`
         */
        Name: string;
        /**
         * 插件版本。
         * @example `v1`
         */
        Version: string;
        /**
         * 插件概要。
         * @example `这是一个插件`
         */
        Summary: string;
        /**
         * 插件执行阶段：
         * - 默认阶段：0
         * - 认证阶段：1
         * - 鉴权阶段：2
         * - 统计阶段：3
         * @example `1`
         */
        Phase: number;
        /**
         * 插件执行优先级。数值越大，优先级越高。
         * @example `1`
         */
        Priority: number;
        /**
         * 配置校验。
         * @example `# 配置必须字段的校验，如下例所示，要求插件配置必须存在 "name"、"age"、“friends” 字段
        name: John
        age: 18
        friends:
        - David
        - Anne
        `
         */
        ConfigCheck: string;
        /**
         * Wasm实现语言：
         * - C++：0
         * - TinyGo：1
         * - Rust：2
         * - AssemblyScript：3
         * - Zig：4
         * @example `0`
         */
        WasmLang: number;
        /**
         * 发布状态：
         * - 0：成功
         * - 1：发布中
         * - 2：发布失败
         * @example `1`
         */
        PublishState: number;
        /**
         * Wasm插件OSS。
         * @example `https://mse-shared-cn-hangzhou.oss-cn-hangzhou.aliyuncs.com/cfg/import/1917515******​/gw-0adf3ad751284cc69fcf9669fba*****​/2022/11/02/4d390496-2c17-4b42-a479-f9068ba****​/16673573***5.wasm`
         */
        WasmFile: string;
        /**
         * 启用状态。
         * - 未启用：0
         * - 启用：1
         * @example `1`
         */
        Status: string;
        /**
         * 插件语言：
         * - 0：WASM插件
         * - 2：LUA插件
         * @example `0`
         */
        Mode: number;
        /**
         * 最新版本。
         * @example `1.0.0`
         */
        MaxVersion: string;
        /**
         * 最新版本是否正在发布中。
         * @example `false`
         */
        NewVersionPublishingFlag: boolean;
    }[];
}
