export interface AttachSceneDefenseObjectRequest {
    /**
     * 策略ID。
     * > 您可以调用[DescribeSceneDefensePolicies](~~159382~~)查询所有策略ID。
     * @example `321a-fd31-df51-****`
     */
    "PolicyId": string;
    /**
     * 对象类型。取值：**Domain**，表示域名。
     * @example `Domain`
     */
    "ObjectType": string;
    /**
     * 要添加的防护对象。多个对象间使用英文逗号（,）分隔。
     * @example `www.aliyun.com`
     */
    "Objects": string;
}
