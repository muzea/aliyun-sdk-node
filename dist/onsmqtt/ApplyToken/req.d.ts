export interface ApplyTokenRequest {
    /**
     * 资源名称，即云消息队列 MQTT 版的Topic，多个Topic以逗号（,）分隔，每个Token最多运行操作100个资源。当有多个Topic时，需要按照字典顺序排序。
     * 申请Token时注册的资源参数支持MQTT通配符语法，包含加号单级通配符（+）和井号多级通配符（#）。
     * 例如，如果申请Token时指定**Resources**为“Topic1/+”，则客户端可以操作“Topic1/xxx”的任意Topic；如果申请Token时指定**Resources**为“Topic1/#”，则客户端可以操作“Topic1/xxx/xxx/xxx”的任意多级Topic。
     * > 云消息队列 MQTT 版支持匹配子级Topic，子级Topic无需在控制台创建，直接在消息收发代码中设置即可。Topic名称中的正斜线（/）用于分隔父级Topic和各子级Topic。更多信息，请参见[基本概念](~~42420~~)。
     * @example `TopicA/+`
     */
    "Resources": string;
    /**
     * 云消息队列 MQTT 版实例的ID，一定要和客户端实际使用的实例ID匹配。该实例ID在[控制台](https://mqtt.console.aliyun.com/)**实例详情**页面获取。
     * @example `post-cn-0pp12gl****`
     */
    "InstanceId": string;
    /**
     * Token失效的毫秒时间戳。允许设置的失效最小间隔是60秒，最长为30天。如果输入的取值超过30天，申请接口不会报错，但实际生效时间为30天。
     * 示例：如果Token的失效间隔需设置为60秒，当前的系统时间毫秒时间戳为1609434061000，那么该参数的取值需设置为**1609434121000**，即1609434061000+60x1000之和。
     * @example `1609434121000`
     */
    "ExpireTime": number;
    /**
     * Token的权限类型，取值说明如下：
     * - **R**：只有读权限，即只能订阅指定的Topic，不能向Topic生产消息。
     * - **W**：只有写权限，即只能向指定Topic生产消息，不能订阅指定Topic。
     * - **R,W**：同时拥有读和写的权限，即同时拥有向指定Topic生产消息或订阅指定Topic的权限。**R**和**W**之间需要用逗号（,）隔开。
     * @example `R`
     */
    "Actions": string;
}
