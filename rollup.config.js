import typescript from "@rollup/plugin-typescript";

//외부 노드 모듈이 es6 으로 변환되지 않았을 경우 es6 으로 변환하는 플러그인
import commonjs from "@rollup/plugin-commonjs";
// node_modules에서 third party 모듈을 사용하는 용도, js 이외의 확장자 (ts, tsx) 파일을 불러오기 위해서도 이 플러그인을 필요로 함
import resolve from "@rollup/plugin-node-resolve";

const external = ['react', 'react-dom', 'styled-components'];

export default {
	input: 'src/index.ts',
	output: {
		dir: 'build',
		format: 'esm',
		sourcemap:true,
	},
	preserveModules:true,
    plugins: [
		resolve(),
		commonjs({
			include: /node_modules/,
		  }),
        typescript(),
      ],
	  external
	  
};