export interface ModifyWebLockUnbindRequest {
    /**
     * 指定需要解绑防护目录的服务器的UUID。
     * > 您可以调用[DescribeWebLockBindList](~~DescribeWebLockBindList~~)接口获取服务器的UUID。
     * @example `8d217d3f-6999-43a6-a435-c7a6854180e9`
     */
    "Uuid"?: string;
}
