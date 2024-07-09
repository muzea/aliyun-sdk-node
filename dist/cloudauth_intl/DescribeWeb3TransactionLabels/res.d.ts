export interface DescribeWeb3TransactionLabelsResponse {
    /**
     * The unique ID of the request, which can be used to locate issues.
     * @example `7A0D192A-CC0C-5DE5-A3B6-A14CF45508F2`
     */
    RequestId: string;
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
         * chainName
         * @example `ETH`
         */
        ChainName: string;
        /**
         * short name of blockchain
         * @example `eth`
         */
        ChainShortName: string;
        /**
         * Txid
         * @example `c92880148d4896d8a2093a891a8f08916fe141fba474ede410xxxxxx`
         */
        Txid: string;
        /**
         * height
         * @example `17087552`
         */
        Height: number;
        /**
         * the block timestamp
         * @example `1681991807`
         */
        TransactionTime: string;
        /**
         * Integer	0: legacy; 1: eip 2930; 2: eip 1559
         * @example `1`
         */
        TransactionType: string;
        /**
         * the amount of native currency
         * @example `27`
         */
        Amount: string;
        /**
         * the symbol of native currency
         * @example `ETH`
         */
        TransactionSymbol: string;
        /**
         * the method name of contract call. For external transaction method: ['CALL','CALLCODE','DELEGATECALL','STATICCALL']; for internal transaction method: the first 4 bytes of the hash of the method name
         * @example `a9059cbb`
         */
        MethodId: string;
        /**
         * error log
         * @example `“”`
         */
        ErrorLog: string;
        /**
         * input data
         * @example `a9059cbb000000000000000000000000c7019579cb9bdb9204e61c7179ba2f88f9d2990b000000000xxxxxx`
         */
        InputData: string;
        /**
         * the transaction fee in eth
         * @example `0.002321489548255059`
         */
        Txfee: string;
        /**
         * the position of the transaction in the block
         * @example `94`
         */
        Index: number;
        /**
         * input details
         */
        InputDetails: {
            /**
             * the address hash
             * @example `21a31Ee1afC51d94C2eFcCAa2xxxxxx`
             */
            InputHash: string;
            /**
             * example: true. is it a contract
             * @example `true`
             */
            IsContract: string;
            /**
             * example: Dex . the tag of the address
             * @example `contracts:Tether: Tether_USD,token_standard:xxxxxx
            `
             */
            Tag: string;
            /**
             * example: 15. the amount of transation sent by the address
             * @example `3234`
             */
            Amount: number;
        }[];
        /**
         * output details
         */
        OutputDetails: {
            /**
             * the address hash
             * @example `21a31Ee1afC51d94C2eFcCAa2xxxxxx`
             */
            InputHash: string;
            /**
             * example: true. is it a contract
             * @example `true`
             */
            IsContract: string;
            /**
             * example: Dex. the tag of the address
             * @example `contracts:Tether: Tether_USD,token_standard:xxxxxx`
             */
            Tag: string;
            /**
             * example: 15. the amount of transation sent by the address
             * @example `1500`
             */
            Amount: number;
        }[];
        /**
         * the transaction state. 1: success 0: fail
         * @example `1`
         */
        State: number;
        /**
         * gasLimit
         * @example `1232`
         */
        GasLimit: number;
        /**
         * gasUsed
         * @example `234`
         */
        GasUsed: number;
        /**
         * gasPrice
         * @example `5034`
         */
        GasPrice: string;
        /**
         * nonce
         * @example `6242724`
         */
        Nonce: string;
        /**
         * token transfer details
         */
        TokenTransferDetails: {
            /**
             * the call layer of to token transfer
             * @example `0`
             */
            Index: number;
            /**
             * the token name
             * @example `Tether USD`
             */
            Token: string;
            /**
             * the token address
             * @example `dAC17F958D2ee523a2206206994597C13Dxxxxxx`
             */
            TokenContractAddress: string;
            /**
             * the token symbol
             * @example `USDT`
             */
            Symbol: string;
            /**
             * the sender of the token
             * @example `21a31Ee1afC51d94C2eFcCAa2092aD1028xxxxxx`
             */
            From: string;
            /**
             * the receiver of the token
             * @example `C7019579cB9bdb9204e61C7179ba2F88F9dxxxxxx`
             */
            To: string;
            /**
             * NFT ID, if the token is erc721
             * @example `-1`
             */
            TokenId: string;
            /**
             * the token amount
             * @example `945.5`
             */
            Amount: string;
        }[];
        /**
         * contract details
         */
        ContractDetails: {
            /**
             * the call layer of internal transaction
             * @example `1`
             */
            Index: number;
            /**
             * the sender of internal transaction
             * @example `C7019579cB9bdb9204e61C7179ba2F88F9dxxxxxx`
             */
            From: string;
            /**
             * the receiver of internal transaction
             * @example `C7019579cB9bdb9204e61C7179ba2F88F9dxxxxxx`
             */
            To: string;
            /**
             * the value of internal transaction
             * @example `945.5
            `
             */
            Amount: string;
            /**
             * the gaslimit of internal transaction
             * @example `20712`
             */
            GasLimit: number;
        }[];
    };
    /**
     * The HTTP status code.
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * Return code. For the full list of codes, see Codes and Messages.
     * @example `Success`
     */
    Code: string;
}
