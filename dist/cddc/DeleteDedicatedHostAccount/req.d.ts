export interface DeleteDedicatedHostAccountRequest {
    /**
     * 主机ID。可调用[DescribeDedicatedHosts](~~200944~~)获取。
     * @example `ch-bp10a5id3boqi****`
     */
    "DedicatedHostId": string;
    /**
     * 主机账号名称。
     * - 由小写字母、数字、下划线组成。
     * - 以字母开头，以字母或数字结尾。
     * - 包含2~16个字符。
     * @example `test`
     */
    "AccountName": string;
    /**
     * 主机所在地域ID。可调用[DescribeDedicatedHostAttribute](~~213010~~)获取。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
}
