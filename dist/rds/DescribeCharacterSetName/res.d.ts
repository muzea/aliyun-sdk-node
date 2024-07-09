export interface DescribeCharacterSetNameResponse {
    /**
     * 数据库引擎类型。
     * @example `mysql`
     */
    Engine: string;
    /**
     * 请求ID。
     * @example `1E43AAE0-BEE8-43DA-860D-EAF2AA0724DC`
     */
    RequestId: string;
    CharacterSetNameItems: {
        /**
         * 支持的字符集列表。
         */
        CharacterSetName: string[];
    };
}
