export interface ModifyDedicatedHostPasswordRequest {
    /**
     * 主机所在地域ID。可调用[DescribeDedicatedHostAttribute](~~213010~~)获取。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 新密码。密码要求：
     * - 长度为8~32位。
     * - 须同时包含大写、小写、数字、特殊字符中的3种。
     * - 特殊字符为：`!@#$%^&*()_+-=`
     * > 当您的引擎为SQL Server时，密码要求不能包含账户名（忽略大小写）。
     * @example `test*****`
     */
    "NewPassword": string;
    /**
     * 主机ID。可调用[DescribeDedicatedHosts](~~200944~~)获取。
     * @example `ch-bp10a5id3boqi****	`
     */
    "DedicatedHostId": string;
}
