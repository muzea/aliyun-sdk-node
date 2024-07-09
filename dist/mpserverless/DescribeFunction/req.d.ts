export interface DescribeFunctionRequest {
    /**
     * 云函数名称。
     * @example `demoFunction`
     */
    "Name": string;
    /**
     * 云函数所属的服务空间ID。
     * @example `dece4ea0-d432-4cfa-8514-xxxx`
     */
    "SpaceId": string;
}
