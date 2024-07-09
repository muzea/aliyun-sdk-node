export interface DescribeInstanceRebootStatusRequest {
    /**
     * 要查询重启的服务器的UUID，多个UUID使用半角逗号（,）分隔。
     * @example `d77f7802-4f0a-4221-ab02-4d999e****`
     */
    "Uuids": string;
}
