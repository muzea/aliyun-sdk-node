export interface RegisterEventSourceResponse {
    /**
     * 事件源资源标识符。
     * @example `acs:eventbridge:cn-shanghai:123456:eventbus/mns-test/rule/fc-test1/target/abc`
     */
    sourceArn: string;
    /**
     * 事件源创建时间。
     * @example `2016-08-15T16:06:05.000+0000`
     */
    createdTime: string;
}
