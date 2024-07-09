export interface DescribeDBVersionInfosResponse {
    /**
     * 请求ID。
     * @example `ABB39CC3-4488-4857-905D-2E4A051D0521`
     */
    RequestId: string;
    /**
     * 数据结构。
     */
    VersionDetails: {
        /**
         * 存储弹性的内核版本信息。
         * @example `"StorageElasic": [
                        {
                            "engineVersion": "6.0",
                            "versionInfos": [
                                {
                                    "kernelVersion": "v6.3.11.2",
                                    "releaseDate": "2023-08-17T09:14Z",
                                    "expirationDate": "2026-08-17T09:14Z"
                                }
                  },
                        {
                            "engineVersion": "7.0",
                            "versionInfos": [
                                {
                                    "kernelVersion": "v7.0.2.0",
                                    "releaseDate": "2023-08-09T06:47Z",
                                    "expirationDate": "2026-08-09T06:47Z"
                                },
                                {
                                    "kernelVersion": "v7.0.1.8",
                                    "releaseDate": "2023-05-25T06:56Z",
                                    "expirationDate": "2026-05-25T06:56Z"
                                }
                            ]
                        }
        ]
        `
         */
        StorageElastic: any;
        /**
         * 云原生的内核版本信息。
         * @example `"Serverless": [
                        {
                            "engineVersion": "6.0",
                            "versionInfos": [
                                {
                                    "kernelVersion": "v2.0.0.5",
                                    "releaseDate": "2023-05-28T07:48Z",
                                    "expirationDate": "2026-05-28T07:48Z"
                                },
                                {
                                    "kernelVersion": "v2.0.0.1",
                                    "releaseDate": "2023-03-27T12:44Z",
                                    "expirationDate": "2026-03-27T12:44Z"
                                },
                                {
                                    "kernelVersion": "v1.0.5.1",
                                    "releaseDate": "2023-02-22T11:39Z",
                                    "expirationDate": "2026-02-22T11:39Z"
                                }
                            ]
                        }
        ]`
         */
        Serverless: any;
    };
}
