export interface CreateBindingRequest {
    /**
     * 云消息队列 RabbitMQ 版实例的ID。
     * @example `amqp-cn-v0h1kb9nu***`
     */
    "InstanceId": string;
    /**
     * Vhost名称。
     * 此Vhost已在控制台创建且是**DestinationName**和**SourceExchange**所属的Vhost。
     * @example `test`
     */
    "VirtualHost": string;
    /**
     * 源Exchange名称，且此Exchange已在控制台创建。
     * @example `NormalEX`
     */
    "SourceExchange": string;
    /**
     * 绑定目标名称。
     * 此绑定目标需已在控制台创建且所属Vhost与**SourceExchange**所属Vhost一致，即在**VirtualHost**中。
     * @example `DemoQueue`
     */
    "DestinationName": string;
    /**
     * 绑定键。
     * - 绑定源Exchange为非Topic类型：
     *     - 只能包含字母、数字、短划线（-）、下划线（_）、半角句号（.）、正斜线（/）、at符号（@）。
     *     - 长度限制1~255字符。
     * - 绑定源Exchange为Topic类型：
     *     - 可以包含字母、数字、短划线（-）、下划线（_）、星号（*）、半角句号（.）、井号（#）、正斜线（/）、at符号（@）。
     *     - 不能以半角句号（.）开头或结尾。对于井号（#）或星号（*），如果以其开头，则其后需有半角句号（.），如果以其结尾，则其前需有半角句号（.），如果既不是开头也不是结尾，则其前后均需有半角句号（.）。
     *     - 长度限制1~255字符。
     * @example `.test`
     */
    "BindingKey": string;
    /**
     * 绑定目标对象的类型。取值：
     * - **0：**Queue
     * - **1：**Exchange
     * @example `0`
     */
    "BindingType": string;
    /**
     * 设置消息头属性键值对信息，消息头属性使用一个或多个键值对拼接而成。x-match属性必须配置，其余属性可自定义。x-match属性取值如下：
     * - **all：**默认值，所有消息头的键值对必须匹配。
     * - **any：**至少一对消息头的键值对必须匹配。
     * 属性之间使用半角分号（;）隔开，属性键与值之间使用半角冒号（:）区分。例如x-match:all;type:report;format:pdf
     * 该参数适用于Headers Exchange，对其它类型的Exchange无效。其它类型的Exchange，此处可以填任意值。
     * @example `x-match:all;type:report;format:pdf `
     */
    "Argument"?: string;
}
