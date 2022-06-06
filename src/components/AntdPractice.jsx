import React, { useState } from 'react';
import { Select } from 'antd';
import styled from 'styled-components';
import Button from './Button';
const { Option } = Select;

export default function AntdPractice() {
	const provinceData = ['Zhejiang', 'Jiangsu', 'Prateek'];
	// const [datas, setDatas] = useState(provinceData);
	const [links, setLinks] = useState('Zhejiang');

	const handleChange = (value) => {
		setLinks(value);
		// console.log(`'Hi i am ' ${value}`);
	};
	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			{provinceData.map((data, index) => {
				return <Button text={data} change={setLinks} />;
			})}

			{links === 'Zhejiang' && <p>hi i am Zhejiang</p>}
			{links === 'Jiangsu' && (
				<p>
					hi Lorem ipsum dolor, sit amet consectetur adipisicing elit.
					Aspernatur dignissimos officiis deleniti quidem quis sunt ex veniam
					nemo voluptas nulla? i am Jiangsu
				</p>
			)}
			{links === 'Prateek' && <p>hi i am Prateek</p>}
			{/* <Select
				defaultValue="Zhejiang"
				onChange={handleChange}
				style={{
					width: 200,
				}}
			>
				{provinceData.map((data, index) => {
					return (
						<Option key={index} value={data}>
							{data}
						</Option>
					);
				})}
			</Select> */}

			{/* <p>hi i am {links}</p> */}
		</div>
	);
}
