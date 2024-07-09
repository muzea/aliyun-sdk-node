export interface GetAccessPageSessionResponse {
    /**
     * Id of the request
     * @example `1CBAFFAB-B697-4049-A9B1-67E1FC5F****`
     */
    RequestId: string;
    /**
     * 状态码：
     * - `200`：成功。
     * - `400`：出错。
     * @example `200`
     */
    Code: string;
    /**
     * 错误信息
     * @example `找不到访问页`
     */
    Message: string;
    /**
     * 请求成功与否，成功返回为true，失败为false
     * @example `true`
     */
    Success: string;
    /**
     * 访问页凭据对象
     */
    Data: {
        /**
         * 连接凭据信息
         * @example `DQpbRGVza3RvcF0NCkZvcmNlVGxzVHlwZT0xDQpHV1Rva2VuUGFydDE9MDBzQU5DTGVsZ0RqMnAyMGpZdUNkRDMrNTlLekpzUTRXNElPWVdjWGIwZ2QrUkNyais0ZGM3WUJGM1NBdVFJWWl2ejhaWDlvakh1cDJ4c0Vpc3lrQ1I4RVEzeDhIYXdCb2pRRDJReklaQTZIbU52VjdrRlNlWkxQTXV3Y0hNTEZTTkxKaDNOY1BtU0tVYTNqWVVUMFUyKzNqWDBRMXdLM29ZQnJaOFVoL2RWY0xpem5tWEhHTmE0THVGRCtrajloSWlFT0w3b2w4OHY1cjBPelpHZnh4aXlVbk1yQURnRHhoK1F6K3UvdXYxaFYyQ3UwVlduTHJ3cDNRM3hYWWtORW81N00xYWZ4cTJBdWplVmx3aGVxOHd4dDl2Y3NGVGMxNFpPL2hudWdoeGJkaz0NCkdXVG9rZW5QYXJ0Mj0NCkFzcEF1dGhUb2tlbj0wME5LTnlLZXE3UGpzNzNzeURrdEs2NUlaenpYb05WNWxnY3BjVTJMd2NKUEoyMk53WmlrSGNaaDdNVGk2azlLazNyeHFCd2FHZTlmc2NUbFljUDJ0MEVldXRha2paUklMM0x3a0RsT1BZZTZxYmtsay9STHFrajg4dWg0ZFZNTHE2QkF0WVRSeW9ZTC9WUHhaVWxyZEZOQT09DQpBZXNLZXlWZXJzaW9uPTE3MDEyMzk1ODc4NzcNCkdhdGV3YXlEb21haW5BZGRyZXNzPWd3LWFwcC1jbi1oYW5nemhvdS1pLWFwcC10ZXN0MC13aW4ud3V5aW5nLmFsaXl1bmNzLmNvbQ0KR2F0ZXdheUFkZHJlc3M9NDcuOTkuMjIzLjE0OQ0KR2F0ZXdheVBvcnQ9NTkxMg0KR2F0ZXdheVdzc1BvcnQ9ODAwOA0KU3RyZWFtVHlwZT0wDQpSdGNHd1Rva2VuPVAwMFJkc013dVdQVkt4MGtRYUNkSlY3MUc2OC9iaWFhSEJwVn******`
         */
        ConnectTicket: string;
        /**
         * flow ID
         * @example `e4fa0b4c18c5437a8b1746e7c228172e`
         */
        FlowId: string;
    };
}
