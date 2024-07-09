export interface ChangeDomainGroupRequest {
    /**
     * 语言。
     * @example `en`
     */
    "Lang"?: string;
    /**
     * 域名名称。
     * @example `example.com`
     */
    "DomainName": string;
    /**
     * 目标域名分组ID。
     * - 如不传GroupId，则指将域名放到默认分组下。
     * - 如GroupId为空字符""，则指将域名放到默认分组下。
     * - 如GroupId为defaultGroup，则指将域名放到默认分组下。
     * - 如GroupId不符合上述条件，传入的GroupId验证结果为存在，则更新目标域名的GroupId，不存在则不更新。
     * @example `2223`
     */
    "GroupId"?: string;
}
