export interface ListSmartVoiceGroupsResponse {
    /**
     * Id of the request
     * @example `627B30EB-1D0A-5C6D-8467-431626E0FA10`
     */
    RequestId: string;
    /**
     * 发音人组结果集
     */
    VoiceGroups: {
        /**
         * 发音人组名称
         * @example `超高清`
         */
        Type: string;
        /**
         * 发音人列表
         */
        VoiceList: {
            /**
             * 发音人名称
             * @example `知甜`
             */
            Name: string;
            /**
             * 发音人类型
             * @example `Female`
             */
            VoiceType: string;
            /**
             * 发音人id
             * @example `zhitian`
             */
            Voice: string;
            /**
             * 发音人描述
             * @example `甜美女声`
             */
            Desc: string;
            /**
             * 发音人类型标签
             * @example `通用场景`
             */
            Tag: string;
            /**
             * 发音人备注
             * @example `中文及中英文混合场景`
             */
            Remark: string;
            /**
             * 发音人示例音频
             * @example `https://***.com/zhitian.mp3`
             */
            VoiceUrl: string;
        }[];
    }[];
}
