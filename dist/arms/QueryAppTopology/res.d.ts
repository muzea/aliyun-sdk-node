export interface QueryAppTopologyResponse {
    /**
     * 请求ID。
     * @example `78901766-3806-4E96-8E47-CFEF59E4****`
     */
    RequestId: string;
    /**
     * 查询是否成功：true：成功。                                 false：失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 接口状态，取值说明如下：2XX：成功。3XX：重定向。4XX：请求错误。5XX：服务器错误。
     * @example `200`
     */
    Code: number;
    /**
     * 调用失败时返回的信息。
     * @example `null`
     */
    Message: string;
    /**
     * 返回信息。
     * @example `"Data": {
        "nodes": [
          {
            "data": {
              "duration": 0.2254335260115607,
              "requests": 1211,
              "type": "MYSQL",
              "errors": 0
            },
            "id": "ggxw4lnjuz@c0507xxxx##MYSQL",
            "label": "mysql-pod:3306(cart_db)"
          }
        ],
        "edges": [
          {
            "data": {
              "duration": 0.03333333333333333,
              "requests": 600,
              "type": "UNKNOWN",
              "errors": 0
            },
            "id": "1974097372",
            "source": "ggxw4lnjuz@456xxxxx",
            "target": "ggxw4lnjuz@c0507xxxx"
          }
        ]
      }`
     */
    Data: any;
}
