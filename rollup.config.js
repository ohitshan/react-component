import typescript from "@rollup/plugin-typescript";

//외부 노드 모듈이 es6 으로 변환되지 않았을 경우 es6 으로 변환하는 플러그인
import commonjs from "@rollup/plugin-commonjs";



export default {
	input: 'src/index.ts',
	output: {
		dir: 'build',
		format: 'esm',
		sourcemap:true,
	},
	preserveModules:true,
    plugins: [
		commonjs({
			include: /node_modules/,
		  }),
        typescript(),
      ],
};