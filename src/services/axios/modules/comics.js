import Rest from "../rest";
import api from "../../../containers/axios.js";
import Service from "../../service";

/**
 * @type {comics}
 */
export default class comics extends Rest {
  constructor() {
    super(
      `https://gateway.marvel.com:443/v1/public/comics?`
    );
  }
}
