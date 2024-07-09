export interface DescribeWeb3AddressLabelsResponse {
    /**
     * The unique ID of the request, which can be used to locate issues.
     * @example `7F971622-38C0-5F56-B2EC-315367979B4F`
     */
    RequestId: string;
    /**
     * Return code. For the full list of codes, see Codes and Messages.
     * @example `Success`
     */
    Code: string;
    /**
     * Response detailed message.
     * @example `success`
     */
    Message: string;
    /**
     * data
     */
    Data: {
        /**
         * ChainNameEnumstring name of blockchain
         * @example `Ethereum Mainnet`
         */
        ChainName: string;
        /**
         * ChainShortName
         * @example `eth`
         */
        ChainShortName: string;
        /**
         * address
         * @example `2341980145045A5c5acad3d2Df0cF3B2Afxxxxxx`
         */
        Address: string;
        /**
         * 0: EOA; 1: Contract
         * @example `0`
         */
        ContractAddress: string;
        /**
         * 0: Not validator; 1: validator
         * @example `0`
         */
        IsProducerAddress: string;
        /**
         * tag
         * @example `contracts:Tether: Tether_USD,token_standard:erc20
        `
         */
        Tag: string;
        /**
         * amount of native currency
         * @example `0`
         */
        Balance: string;
        /**
         * native currency of the chain
         * @example `ETH`
         */
        BalanceSymbol: string;
        /**
         * the number of transactions
         * @example `2`
         */
        TransactionCount: number;
        /**
         * the amount of native currency sent in 180 days
         * @example `0`
         */
        SendAmount: string;
        /**
         * the amount of native currency received in 180 days
         * @example `0`
         */
        ReceiveAmount: string;
        /**
         * the number of erc20 tokens involved with current address in 180 days
         * @example `1`
         */
        TokenAmount: number;
        /**
         * address of erc20 tokens involved with current address in 180 days
         * @example `["{"ERC721":[]"]}"]`
         */
        TokenList: string;
        /**
         * the address of deployer if the current address is a contract, null if the current address is an EOA
         * @example `dAC17F958D2ee523a2206206994597C13Dxxxxxx`
         */
        CreateContractAddress: string;
        /**
         * contract creation hash if the current address is a contract, null if the current address is an EOA
         * @example `dAC17F958D2ee523a2206206994597C13Dxxxxxx`
         */
        CreateContractTransactionHash: string;
        /**
         * the first transaction hash sent by the address
         * @example `20230304`
         */
        FirstTransactionTime: string;
        /**
         * the latest transaction hash sent by the address
         * @example `20230304`
         */
        LastTransactionTime: string;
        /**
         * if the address is an erc20 token, returns the token name
         * @example `Tether USD`
         */
        Token: string;
        /**
         * customized assessment detail
         * @example `""`
         */
        CustomRiskAssessment: string;
    };
    /**
     * The HTTP status code
     * @example `200`
     */
    HttpStatusCode: number;
}
