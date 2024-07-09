export interface ListCustomPersonsResponse {
    /**
     * 请求ID。
     * @example `FD4DED6B-0C26-5A8B-A6BE-4FA542AE4D57`
     */
    RequestId: string;
    Categories: {
        /**
         * ⼈物库数组。
         */
        Category: {
            Persons: {
                /**
                 * ⼈物数组。
                 */
                Person: {
                    /**
                     * ⼈物名称。
                     * @example `PersonName-****`
                     */
                    PersonName: string;
                    /**
                     * ⼈物描述。
                     * @example `PersonDescription-****`
                     */
                    PersonDescription: string;
                    Faces: {
                        /**
                         * ⼈脸数组。
                         */
                        Face: {
                            /**
                             * 注册时的⼈脸图⽚URL。
                             * @example `http://example-****.jpeg`
                             */
                            ImageUrl: string;
                            /**
                             * ⼈脸ID。
                             * @example `15****`
                             */
                            FaceId: string;
                        }[];
                    };
                    /**
                     * ⼈物ID。
                     * @example `PersonId-****`
                     */
                    PersonId: string;
                }[];
            };
            /**
             * ⼈物库ID。
             * @example `CategoryId-****`
             */
            CategoryId: string;
            /**
             * ⼈物库名称。
             * @example `CategoryName-****`
             */
            CategoryName: string;
            /**
             * ⼈物库描述。
             * @example `CategoryDescription-****`
             */
            CategoryDescription: string;
        }[];
    };
}
