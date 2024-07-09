export interface GetRolePolicyResponse {
    /**
     * 请求id。
     * @example `0bc1eeed16675342848904412e08dd`
     */
    requestId: string;
    /**
     * 返回数据。
     * @example `{
          "Statement": [
                {
                      "Action": [
                            "odps:*"
                      ],
                      "Effect": "Allow",
                      "Resource": [
                            "acs:odps:*:projects/{projectname}/authorization/packages"
                      ]
                }
          ],
          "Version": "1"
    }
    `
     */
    data: string;
}
