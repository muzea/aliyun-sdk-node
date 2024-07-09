export interface CreateAccountRequest {
    /**
     * 消息队列RabbitMQ版实例的ID，表示您需要为哪个实例创建静态用户名密码。
     * @example `amqp-cn-*********`
     */
    "instanceId": string;
    /**
     * 您的阿里云账号或RAM用户的AccessKey ID。获取方式，请参见[创建AccessKey](~~116401~~)。
     * > 如果您使用RAM用户的AccessKey创建的静态用户名密码接入消息队列RabbitMQ版并收发消息，请确保该RAM用户已被授予收发消息权限。更多信息，请参见[RAM权限策略](~~146559~~)。
     * @example `LTAI5t8be*******tEJ6vfo`
     */
    "accountAccessKey": string;
    /**
     * 待创建的静态用户名。
     * 该参数值由实例ID和AccessKey ID构造的字符串经过Base64编码得出，具体计算方法，请参见本文中的**用户名计算示例代码**。
     * @example `LTAI5***********eRZtEJ6vfo`
     */
    "userName": string;
    /**
     * 签名，系统将根据请求参数中的签名、AccessKey Secret签名和用户名计算出静态用户密码。
     * 签名由指定的用户名创建时间戳和AccessKey ID进行HmacSHA1加密算法计算得出。具体计算方法，请参见本文中的**签名算法示例代码**。
     * @example `22c2d7d1769cb53c5a6d9213248e2de524******`
     */
    "signature": string;
    /**
     * 指定该用户名密码创建的时间戳。单位：毫秒。
     * > 该时间戳用于计算静态用户密码，由您自定义设置。不是系统生成用户名密码时的时间戳。
     * @example `1671175303522`
     */
    "createTimestamp": number;
    /**
     * AccessKey Secret签名，系统将根据请求参数中的签名、AccessKey Secret签名和用户名计算出静态用户密码。
     * AccessKey Secret签名由指定的用户名创建时间戳和AccessKey ID进行HmacSHA1加密算法计算得出。具体计算方法，请参见本文中的**签名算法示例代码**。
     * @example `4c1a6367ce4c4255e9617326f9133ac635******`
     */
    "secretSign": string;
}
