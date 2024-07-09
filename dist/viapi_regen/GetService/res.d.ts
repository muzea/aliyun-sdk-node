export interface GetServiceResponse {
    /**
     * 每个请求分配唯一的服务器请求ID。
     * @example `BAFD3138-AF5B-0193-A155-32C16CA895AE`
     */
    RequestId: string;
    /**
     * 出参数据实体。
     */
    Data: {
        /**
         * 服务ID。
         * @example `4`
         */
        Id: number;
        /**
         * 创建时间。
         * @example `1631505139000`
         */
        GmtCreate: number;
        /**
         * 服务名称。
         * @example `QSL测试`
         */
        ServiceName: string;
        /**
         * 服务描述。
         * @example `SQL测试描述`
         */
        ServiceDescription: string;
        /**
         * 服务当前状态，服务状态取值如下：
         * - **INIT**：初始化
         * - **STARTING**：开始运行
         * - **RUNNING**：运行
         * - **START_FAIL**：启动失败
         * - **STOPPING**：停止运行
         * @example `INIT`
         */
        Status: string;
        /**
         * 接口鉴权密钥。
         * @example `b66e91b46a05afa3b07c4dcaafb9****`
         */
        ServiceId: string;
        /**
         * 入参。
         * @example `[{"name": "requestId", "desc": "请求ID，用于问题排查", "example": "D6319603-9DD1-45ae-950E-FCA36EB6DFA7"}, {"name": "imageUrl", "desc": "需要传上海OSS内网地址", "example": "https://viapi-test.oss-cn-shanghai-internal.aliyuncs.com/regen/test.jpeg"}]`
         */
        InputParams: string;
        /**
         * 出参。
         * @example `[{"name": "category", "desc": "分类", "example": "black"}, {"name": "score", "desc": "置信度", "example": "0.8801174759864807"}]`
         */
        OutputParams: string;
        /**
         * 错误码。
         * @example `[{"errorcode": "0", "errormessage": "success", "description": "成功"}, {"errorcode": "401", "errormessage": "parse json error", "description": "解析输入的json出错"}, {"errorcode": "402", "errormessage": "download data error", "description": "下载图片出错"}, {"errorcode": "500", "errormessage": "pre processing error", "description": "算法前处理错误"}, {"errorcode": "501", "errormessage": "inference error", "description": "算法推理错误"}, {"errorcode": "502", "errormessage": "post processing error", "description": "算法后处理错误"}]`
         */
        Errorcodes: string;
        /**
         * 入参示例。
         * @example `{"requestId": "D6319603-9DD1-45ae-950E-FCA36EB6DFA7", "imageUrl":"https://viapi-test.oss-cn-shanghai-internal.aliyuncs.com/regen/test.jpeg"}`
         */
        InputExample: string;
        /**
         * 出参示例。
         * @example `{"right": "{'requestId': 'D6319603-9DD1-45ae-950E-FCA36EB6DFA7', 'data': {'category': 'black', 'score': 0.8801174759864807}, 'errorcode': '0', 'errormessage': 'success'}", "wrong": "{'requestId': 'D6319603-9DD1-45ae-950E-FCA36EB6DFA7', 'errorcode': '402', 'errormessage': 'download data error'}"`
         */
        OutputExample: string;
        /**
         * 数据回流信息。
         */
        DataReflowInfo: {
            /**
             * 当前服务回流数据总量。
             * @example `193`
             */
            DataReflowCount: number;
            /**
             * 数据回流率。
             * @example `100`
             */
            DataReflowRate: number;
            /**
             * 数据回流路径。
             * @example `oss://regen-test-bucket/jhdtest/检测/回流2/`
             */
            DataReflowOssPath: string;
            /**
             * 数据回流开关标识。
             * @example `true`
             */
            EnableDataReflowFlag: boolean;
        };
    };
}
