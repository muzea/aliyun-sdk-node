export interface LockUsersRequest {
    /**
     * 要锁定的用户所在堡垒机实例的ID。
     * > 您可以调用[DescribeInstances](~~153281~~)接口获取该参数。
     * @example `bastionhost-cn-st220aw****`
     */
    "InstanceId": string;
    /**
     * 指定要锁定的用户所在堡垒机的区域ID。
     * > 区域ID和区域名称的对应关系，请参见[地域和可用区](~~40654~~)。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 要锁定的用户ID。该参数为JSON格式的字符串，最多支持添加100个用户ID，多个ID之间使用半角逗号（,）隔开。
     * > 您可以调用[ListUsers](~~204522~~)接口获取用户ID。
     * @example ` ["1","2","3"]`
     */
    "UserIds": string;
}
