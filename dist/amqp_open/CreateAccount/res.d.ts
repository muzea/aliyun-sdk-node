export interface CreateAccountResponse {
    /**
     * 请求ID。
     * @example `FEBA5E0C-50D0-4FA6-A794-4901E5465***`
     */
    RequestId: string;
    /**
     * 返回码。返回200代表成功。
     * @example `200`
     */
    Code: number;
    /**
     * 返回信息。
     * @example `operation success`
     */
    Message: string;
    /**
     * 执行结果是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 创建该用户名密码所使用的AccessKey ID。
         * @example `LTAI5***********eRZtEJ6vfo`
         */
        AccessKey: string;
        /**
         * 创建的静态用户密码。
         * @example `OUYwQzM2QjZBRkUxNDRFM***************MzZCNzdDQzoxNjcxNDMwMzkyODI1`
         */
        Password: string;
        /**
         * 创建用户名密码的时间戳。单位：毫秒。
         * @example `1671175303522`
         */
        CreateTimeStamp: number;
        /**
         * 消息队列RabbitMQ版实例的ID。
         * @example `amqp-cn-*********`
         */
        InstanceId: string;
        /**
         * 创建静态用户名密码的AccessKey所属的阿里云账号或RAM用户的账号ID。
         * @example `1565*******973901`
         */
        MasterUId: number;
        /**
         * 创建的静态用户名。
         * @example `MjphbXFwLWNuLXVxbTJ6cjc2djAwMzpMVEFJNX*******ZNMWVSWnRFSjZ2Zm8=`
         */
        UserName: string;
    };
}
