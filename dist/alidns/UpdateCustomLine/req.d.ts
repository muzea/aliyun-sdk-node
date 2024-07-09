export interface UpdateCustomLineRequest {
    /**
     * 语言。
     * @example `en`
     */
    "Lang"?: string;
    /**
     * 自定义线路名称，长度限制为1-20个字符，允许包含中文、字母、数字、'-'、'_'这些字符。
     * @example `望京线路`
     */
    "LineName"?: string;
    /**
     * 自定义线路唯一ID。
     * @example `1234`
     */
    "LineId": number;
    /**
     * IP段列表。IP与IP之间用中横线“-”间隔； 每行一个IP段，最少1行最多50行；只有一个IP填写IP1-IP1，不同IP段不能交叉。
     */
    "IpSegment"?: {
        /**
         * IP段的结束IP。
         * @example `2.2.XX.XX`
         */
        EndIp: string;
        /**
         * IP段的开始IP。
         * @example `1.1.XX.XX`
         */
        StartIp: string;
    }[];
}
