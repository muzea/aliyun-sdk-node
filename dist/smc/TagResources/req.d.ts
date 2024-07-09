export interface TagResourcesRequest {
    /**
     * SMC资源类型。取值范围：
     * - sourceserver：迁移源
     * - replicationjob：迁移任务
     * @example `sourceserver`
     */
    "ResourceType": string;
    /**
     * SMC资源ID。SMC资源包括迁移源和迁移任务。N的取值范围：1~50
     * @example `s-bw526m1vi6x20c6g****`
     */
    "ResourceId": string[];
    /**
     * 标签信息列表。
     */
    "Tag": {
        /**
         * 为SMC资源指定的标签键。N的取值范围：1~20
         * 一旦传入该值，则不允许为空字符串。最多支持64个字符，不能以aliyun和acs:开头，不能包含http:\//或者https:\//。
         * @example `TestKey`
         */
        Key: string;
        /**
         * 为SMC资源指定的标签值。N的取值范围：1~20。
         * 一旦传入该值，可以为空字符串。最多支持64个字符，不能包含http://或者https://。
         * @example `TestValue`
         */
        Value: string;
    }[];
}
