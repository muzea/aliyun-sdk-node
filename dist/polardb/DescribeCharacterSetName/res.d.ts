export interface DescribeCharacterSetNameResponse {
    /**
     * 请求ID。
     * @example `34458CD3-33E0-4624-BFEF-840C15******`
     */
    RequestId: string;
    CharacterSetNameItems: {
        /**
         * 支持的字符集列表。
         */
        CharacterSetName: string[];
    };
    /**
     * 集群引擎。
     * @example `POLARDB`
     */
    Engine: string;
}
