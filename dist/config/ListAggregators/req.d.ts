export interface ListAggregatorsRequest {
    /**
     * 当请求的返回结果被截断时，您可以使用`NextToken`再次发起请求，获取从当前截断位置之后的内容。
     * @example `TGlzdFJlc291cmNlU2hhcmVzJjE1MTI2NjY4NzY5MTAzOTEmMiZORnI4NDhVeEtrUT0`
     */
    "NextToken"?: string;
    /**
     * 单次请求返回结果的最大条数。取值范围：1~100。
     * @example `10`
     */
    "MaxResults": number;
}
